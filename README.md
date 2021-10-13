# Metawork tooling slow-down repro

Issue: (husky)[https://www.npmjs.com/package/husky] pre-commit and pre-push hooks are slow when `mw` is running.

1. Make sure `mw` is running with node installed
2. Make some changes to this code and stage the changes with git: `git add .`
3. Commit the changes: `git commit -m "Import changes"` - There should be a significant delay before there's any output from the command. Optionally, try pushing code - tooling will run before git executes. This tooling should also be very slow with `mw` running.
4. Repeat with `mw` turned off (or uninstalled, in my case). There should be no significant delay after comitting or pushing.
