# odin-recipes
The project used data from [Allrecipes](https://www.allrecipes.com/) <br />

**Test in browser (localhost, file:///):** <br />
> [!CAUTION]
> BUG 🔎🐞: 1

| Browser | localhost | file:/// |                                                                                                 detail |
| ------- | :-------: | -------: | -----------------------------------------------------------------------------------------------------: |
| Chrome  |     ✅     |        ✅ |                                                                                                        |
| Edge    |     ✅     |        ✅ |                                                                                                        |
| Firefox |     ✅     |        ❌ | [localStorage doesn't work in file:/// documents](https://bugzilla.mozilla.org/show_bug.cgi?id=507361) |
