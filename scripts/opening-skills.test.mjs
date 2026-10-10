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
  test(`${name}: distributed operations match the shared source`, () => {
    assert.equal(distributed, buildSkill(protocol, name));
  });
  test(`${name}: installed plain-open and @ continuation are self-contained`, () => {
    assert.match(distributed, /`open_carbonchat_thread` with `\{\}`/);
    assert.match(distributed, /Global tool is `open_carbonchat` with\n`\{\}`/);
    assert.match(
      distributed,
      /Do not\nread a second file before discovery or opening/,
    );
    assert.match(
      distributed,
      /do not\nreinstall, repeat update work or offer another new chat/,
    );
    assert.match(
      distributed,
      /even\nwhen `@CarbonChat` is selected and no opener is exposed/,
    );
  });
  test(`${name}: discovery precedes a missing-tool claim or chat handoff`, () => {
    assert.match(distributed, /initial tool inventory may omit deferred tools/);
    assert.match(
      distributed,
      /CarbonChat open_carbonchat_thread open_carbonchat/,
    );
    assert.match(
      distributed,
      /found but not yet selected\ntool is not missing/,
    );
    assert.match(
      distributed,
      /actually exposed, scoped read-only MCP startup\/status check/,
    );
    assert.match(
      distributed,
      /Only if the host explicitly says a new chat is required/,
    );
    assert.match(
      distributed,
      /Tool absence alone does not justify this action/,
    );
    assert.doesNotMatch(
      distributed,
      /If the known installed\/enabled plugin still has no opener/,
    );
  });
  test(`${name}: first-install, startup-error and denial boundaries survive generation`, () => {
    assert.match(distributed, /Only if installation is confirmed missing/);
    assert.match(distributed, /Source registration alone is not installation/);
    assert.match(distributed, /observed startup error as a startup error/);
    assert.match(
      distributed,
      /missing discovery capability as a capability boundary/,
    );
    assert.match(
      distributed,
      /private RPC, tool namespace or permanent host limitation/,
    );
    assert.match(distributed, /Respect an actual access denial/);
    assert.match(distributed, /Guest reading needs no GitHub sign-in/);
    assert.match(
      distributed,
      /Opening authorizes no post, reaction, draft, publication/,
    );
    assert.match(distributed, /Only visible MCP App evidence supports/);
  });
}

test("generation fails closed if a required operational section disappears", () => {
  assert.throws(
    () =>
      buildSkill(
        protocol.replace("## 3. Load this conversation", "## Loading"),
        "setup-carbonchat",
      ),
    /Missing installer section/,
  );
});
