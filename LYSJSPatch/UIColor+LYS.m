//
//  UIColor+LYS.m
//  LYSJSPatch
//
//  Created by 刘永生 on 16/9/6.
//  Copyright © 2016年 刘永生. All rights reserved.
//

#import "UIColor+LYS.h"

@implementation UIColor (LYS)


+ (UIColor *)colorWithHex:(NSString *)hexColor alpha:(float)opacity
{
    if (hexColor.length < 7) {
        return nil;
    }
    NSRange range;
    range.location = 1;
    range.length = 2;
    NSString *rString = [hexColor substringWithRange:range];
    
    range.location = 3;
    NSString *gString = [hexColor substringWithRange:range];
    
    range.location = 5;
    NSString *bString = [hexColor substringWithRange:range];
    
    unsigned int r, g, b;
    [[NSScanner scannerWithString:rString] scanHexInt:&r];
    [[NSScanner scannerWithString:gString] scanHexInt:&g];
    [[NSScanner scannerWithString:bString] scanHexInt:&b];
    
    return [UIColor colorWithRed:r/255.0 green:g/255.0 blue:b/255.0 alpha:1.0];
}

@end
