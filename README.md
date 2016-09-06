# LYSJSPatch
## 启用JSPatch
```
    [JPEngine startEngine];
    
    NSString *sourcePath = [[[NSBundle mainBundle] bundlePath] stringByAppendingPathComponent:@"LYS_JSFile/main.js"];
    
    [JPEngine evaluateScriptWithPath:sourcePath];    
    
```



    