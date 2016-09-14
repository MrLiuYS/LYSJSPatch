//
//  DeallocViewController.m
//  LYSJSPatch
//
//  Created by 刘永生 on 16/9/14.
//  Copyright © 2016年 刘永生. All rights reserved.
//

#import "DeallocViewController.h"

@interface DeallocViewController ()

@end

@implementation DeallocViewController

+ (void)pushInViewController:(UIViewController *)aViewController {
    
    DeallocViewController *ctrl = [[DeallocViewController alloc]init];
    
    [aViewController.navigationController pushViewController:ctrl animated:YES];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.view.backgroundColor = [UIColor whiteColor];
    
}


- (void)dealloc {
    
    NSLog(@"dealloc - OC");
    
    //    [self lys_dealloc];
    
}

- (void)lys_dealloc {
    
    NSLog(@"dealloc - OC");
    
}


@end
