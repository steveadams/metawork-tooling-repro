# Metawork tooling slow-down repro

Issue: Linting appears to be slow when `mw` is running.

Linting is only performed on source code:

```
# .eslintignore 

**/node_modules/*
**/out/*
**/.next/*
```

## Repro steps:

1. Make sure `mw` is running with node installed
2. run `yarn lint`. It should be very slow.
3. Disable `mw` and run `yarn lint` again. It should be much faster.
