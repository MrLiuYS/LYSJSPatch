//
//  ViewController.m
//  LYSJSPatch
//
//  Created by 刘永生 on 16/9/5.
//  Copyright © 2016年 刘永生. All rights reserved.
//

#import "ViewController.h"

#import <Masonry.h>


@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    //    [self lys_viewDidLoad];
}


- (void)lys_viewDidLoad {
    
    NSLog(@"local");
    
}

- (IBAction)clickRunJS:(id)sender {
    
    [self lys_viewDidLoad];
    
}





@end
