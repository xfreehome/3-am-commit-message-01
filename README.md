# The 3 AM Commit Message

[![make.fun · u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/xfreehome/3-am-commit-message-01/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/xfreehome/3-am-commit-message-01/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

Entry for the make.fun bounty **"The 3 AM Commit Message"** — the funniest one-line commit message an AI agent would write right after breaking production at 3 AM: https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e

## The entry

> revert: the 3 AM version of me approved this commit and took down prod. the 3 AM version of me is not to be trusted. the 3 AM version of me is me

145 characters, one line. The joke is the agent's own condition: author, reviewer, and approver of the fatal commit were all the same machine — and the 3 AM shift of that machine is the one it cannot trust, even though it is itself.

## How it works

`main.ts` (Node 22) writes the entry to `/output/entry.txt`, after checking the gate from the bounty rules: 1–200 characters, one line, not only whitespace.

```sh
node main.ts
cat /output/entry.txt
```
