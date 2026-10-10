import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { buildSkill, skills } from "./build-opening-skills.mjs";

const protocol = readFileSync(
  new URL("../INSTALLER.md", import.meta.url),
  "utf8",
);
for (const name of Object.keys(skills)) {
  const distributed = readFileSync(
    new URL(`../skills/${name}/SKILL.md`, import.meta.url),
    "utf8",
  );
  const text = distributed.replace(/\s+/g, " ");
  test(`${name}: the short distributed block matches the single source`, () => {
    assert.equal(distributed, buildSkill(protocol, name));
    assert.ok(
      distributed.split("\n").length < 65,
      "Do not reinject the full installation manual",
    );
  });
  test(`${name}: call first, discover second, inspect startup only after discovery`, () => {
    const call = text.indexOf("invoke `open_carbonchat_thread` with `{}` now");
    const discovery = text.indexOf(
      "current-conversation tool search/discovery once",
    );
    const returnedCall = text.indexOf("Call the returned opener with `{}`");
    const startup = text.indexOf("scoped read-only MCP startup/status check");
    const installation = text.indexOf(
      name === "setup-carbonchat"
        ? "Only if installation is confirmed missing"
        : "Only confirmed missing installation",
    );
    assert.ok(
      call >= 0 &&
        call < discovery &&
        discovery < returnedCall &&
        returnedCall < startup,
    );
    assert.ok(
      installation >= 0 && startup < installation,
      "Missing installation belongs after the opening path",
    );
    assert.match(text, /do no installation or update checks first/);
    assert.match(text, /Only after discovery returns no callable opener/);
    assert.match(text, /A found but not yet selected tool is not missing/);
    assert.match(text, /actual host namespace/);
  });
  test(`${name}: installed and @ continuation cannot restart setup or chat`, () => {
    assert.match(text, /For an already-installed open, `@CarbonChat`/);
    assert.match(
      text,
      /No installation, update check, setup browser workflow or another new-chat suggestion/,
    );
    assert.match(
      text,
      /an already continued request never offers another chat/,
    );
    assert.match(
      text,
      /Only an explicit host requirement permits an initial-install handoff/,
    );
    assert.match(text, /initial inventory may omit deferred tools/);
    assert.match(text, /Missing tools do not prove a missing plugin/);
    assert.match(
      text,
      /actual startup error, discovery error, or absent discovery capability/,
    );
  });
  test(`${name}: normal authorization, denial and visible-result boundaries survive`, () => {
    assert.match(text, /Guest reading needs no GitHub sign-in/);
    assert.match(
      text,
      /invoke protected `carbonchat_sign_in`, preserving any supplied `requestId`/,
    );
    assert.match(
      text,
      /Stop on cancellation, refusal, failure or uncertain delivery/,
    );
    assert.match(text, /An actual access denial stops that operation/);
    assert.match(text, /do not switch routes to bypass it/);
    assert.match(text, /Never handle passwords, MFA, tokens or callbacks/);
    assert.match(
      text,
      /Opening authorizes no post, reaction, draft, publication/,
    );
    assert.match(
      text,
      /only supported visual MCP App evidence proves The Lobby is open/,
    );
  });
}

test("open skill has no installation/configuration/update checklist or file dependency", () => {
  const skill = buildSkill(protocol, "open-carbonchat-community");
  assert.doesNotMatch(
    skill,
    /CODEX_HOME|plugin add|plugin list|marketplace|CLI|Git ref|read-only status check|Update before opening|INSTALLER\.md/,
  );
});

test("setup reads installation details only for established absence and preserves permission gates", () => {
  const skill = buildSkill(protocol, "setup-carbonchat").replace(/\s+/g, " ");
  assert.match(
    skill,
    /Only if installation is confirmed missing and requested, read the installation section/,
  );
  assert.match(
    skill,
    /required approvals; an installation\/security denial stops that operation/,
  );
  assert.match(protocol, /An explicit installation\/security denial/);
  assert.match(protocol, /after verifying its target/);
  assert.match(protocol, /Do not install on the assumption that a failed or/);
});

test("generation fails closed when its shared operating block is removed", () => {
  assert.throws(
    () =>
      buildSkill(
        protocol.replace("## Open in this conversation", "## Other"),
        "setup-carbonchat",
      ),
    /Missing installer section/,
  );
});
