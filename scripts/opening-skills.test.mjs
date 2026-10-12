import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { buildSkill, skills } from "./build-opening-skills.mjs";
const protocol = readFileSync(
  new URL("../INSTALLER.md", import.meta.url),
  "utf8",
);
const flat = protocol.replace(/\s+/g, " ");
for (const name of Object.keys(skills)) {
  const actual = readFileSync(
    new URL(`../skills/${name}/SKILL.md`, import.meta.url),
    "utf8",
  );
  const text = actual.replace(/\s+/g, " ");
  test(`${name}: actual generated distribution stays short and synchronized`, () => {
    assert.equal(actual, buildSkill(protocol, name));
    assert.ok(actual.split("\n").length < 85);
  });
  test(`${name}: direct call/discovery precedes unknown-state diagnosis`, () => {
    assert.ok(
      text.indexOf("First reuse this request's opening result") >= 0 &&
        text.indexOf("First reuse this request's opening result") <
          text.indexOf("Use a callable `open_carbonchat_thread` with `{}`"),
    );
    assert.match(
      text,
      /If a call was accepted or delivery is uncertain, no skill or setup continuation calls again/,
    );
    assert.match(
      text,
      /If no opener call was sent, continue this opening flow before setup/,
    );
    assert.match(
      text,
      /explicit connection challenge's recovery after confirmed authorization below may resume it once/,
    );
    assert.ok(
      text.indexOf("Use a callable `open_carbonchat_thread` with `{}`") <
        text.indexOf("tool discovery once"),
    );
    assert.ok(
      text.indexOf("tool discovery once") <
        text.indexOf("installation-state procedure"),
    );
    assert.match(text, /Only unknown or confirmed absent installation uses/);
    assert.match(
      text,
      /A failed or uncertain call reports that actual result, not missing installation/,
    );
    assert.match(
      text,
      /if panel visibility is unverified, say so without calling again/,
    );
  });
  test(`${name}: observed catalog lookup cannot complete runtime discovery`, () => {
    // The reported tool was a public plugin-directory lookup, not callable-tool discovery.
    assert.match(
      text,
      /Discovery must explicitly find callable tools for this chat/,
    );
    assert.match(
      text,
      /Plugin-directory and web searches, including `plugin_management.search_plugins`, are not runtime tool discovery/,
    );
    assert.match(
      text,
      /They do not consume the discovery check or prove opener absence/,
    );
    assert.match(
      text,
      /If no runtime discovery action is exposed, report discovery unavailable/,
    );
    assert.match(text, /do not report a completed discovery with no opener/);
  });
  test(`${name}: verified installed state survives the observed setup handoff`, () => {
    // Reproduce the instruction boundary: installed/enabled -> catalog lookup -> setup -> unknown.
    assert.match(
      text,
      /When installation is verified for this host\/profile, stay in opening\/loading diagnosis/,
    );
    assert.match(
      text,
      /do not send it to setup for installation diagnosis or reread this guide/,
    );
    assert.match(text, /a mention alone does not verify installation/);
    assert.match(
      text,
      /public MCP discovery cannot overturn verified installation or prove absence/,
    );
    assert.doesNotMatch(
      text,
      /If no opener is callable, let `setup-carbonchat` own/,
    );
  });
  test(`${name}: current-chat opening precedes one first-loading handoff`, () => {
    assert.ok(
      text.indexOf("After installation or enablement changes state, discover") <
        text.indexOf("host explicitly requires **Run setup**"),
    );
    assert.ok(
      text.indexOf("host explicitly requires **Run setup**") <
        text.indexOf("read an exposed scoped startup status"),
    );
    assert.match(text, /A callable opener skips that handoff/);
    assert.match(
      text,
      /installation is verified, no opener call has been sent/,
    );
    assert.match(text, /Prefer supported current-chat loading/);
    assert.match(text, /discovery is unavailable or one successful read-only discovery check returns no opener/);
    assert.match(
      text,
      /one loading handoff to a new chat or session on the same Mac\/profile/,
    );
    assert.match(
      text,
      /Use an exposed supported handoff when authorized; otherwise tell the user/,
    );
    assert.match(text, /already installed/);
    assert.doesNotMatch(
      text,
      /Only an explicit host requirement permits a new chat/,
    );
    assert.doesNotMatch(text, /a continuation never offers another new chat/);
    assert.doesNotMatch(
      text,
      /sidebar|normal click|CODEX_HOME|marketplace list|plugin add/,
    );
  });
  test(`${name}: loading continuation preserves state without replay or a chat loop`, () => {
    assert.match(
      text,
      /Carry verified installation and the pending first opening/,
    );
    assert.match(
      text,
      /A continuation resumes that handoff; never offer another one/,
    );
    assert.match(text, /Do not repeat accepted or uncertain calls/);
    assert.match(text, /Stop on errors, denial\/cancellation or pending\/uncertain operations/);
    assert.match(text, /or reload other work/);
    assert.match(text, /A handoff is not opener acceptance or a visible Lobby/);
    const manualHandoff = text.match(/“@CarbonChat[^]*?”/)?.[0];
    assert.ok(manualHandoff);
    assert.match(manualHandoff, /already installed\. No opener call has been made\. Open The Lobby here/);
    assert.match(manualHandoff, /This is the single loading handoff; do not reinstall or move to another chat/);
  });
  test(`${name}: connection and publication boundaries survive generation`, () => {
    assert.match(text, /Guest reading needs no GitHub sign-in/);
    assert.match(
      text,
      /after confirmed success, resume the pending opener once/,
    );
    assert.match(text, /Refusal, cancellation or uncertain delivery stops/);
    assert.match(text, /Never handle passwords, MFA, tokens or callbacks/);
    assert.match(
      text,
      /Opening authorizes no post, reaction, draft, publication/,
    );
  });
}
test("installation diagnostics selects native or matched CLI, not UI/catalog lookup", () => {
  assert.match(
    flat,
    /If state is unknown, use a supported, scoped native read-only plugin check/,
  );
  assert.match(flat, /Native status success skips CLI/);
  assert.match(flat, /An error means unknown, not absent/);
  assert.match(
    flat,
    /execution host, OS user and Codex profile match the target/,
  );
  assert.match(
    flat,
    /no computer use, desktop clicks, browser navigation or public plugin-directory search/,
  );
});
test("CLI source registration precedes inventory and both mutations require absence", () => {
  assert.match(flat, /First list marketplaces/);
  assert.match(
    flat,
    /Only confirmed source absence permits registering the public source, after any required approval; then read that source's inventory/,
  );
  assert.match(flat, /Do not query a nonexistent marketplace first/);
  assert.match(flat, /Install only a confirmed missing CarbonChat plugin/);
  assert.match(flat, /Reconcile status before another mutation/);
});
test("unknown setup can read diagnosis without proving absence or starting another request", () => {
  const setup = buildSkill(protocol, "setup-carbonchat").replace(/\s+/g, " ");
  assert.match(
    setup,
    /Only when installation is unknown or confirmed absent, use/,
  );
  assert.match(setup, /Keep the same request/);
  assert.match(
    flat,
    /Reuse a completed status check; do not restart diagnosis after a skill handoff/,
  );
  assert.doesNotMatch(
    setup,
    /Only if installation is confirmed missing and requested, read/,
  );
});
test("both copyable outer prompts contain the fixed fallback before retrieval", () => {
  const prompts = [
    ...protocol
      .split("Copyable requests:")[1]
      .matchAll(/```text\n([^]*?)\n```/g),
  ].map((m) => m[1]);
  assert.equal(prompts.length, 2);
  for (const prompt of prompts)
    assert.ok(
      prompt.includes(
        "https://raw.githubusercontent.com/JetXu-LLM/carbonchat-plugin/main/INSTALLER.md",
      ),
    );
});
test("generation fails closed without the common open/recovery section", () => {
  assert.throws(
    () =>
      buildSkill(
        protocol.replace("## Continue opening", "## Other"),
        "setup-carbonchat",
      ),
    /Missing installer section/,
  );
});
