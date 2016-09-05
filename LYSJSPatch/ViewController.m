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

- (void)loadView {
    
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    //    [self lys_viewDidLoad];
}


- (void)lys_viewDidLoad {
    
    NSLog(@"local");
    
    
    UITableView * mainTableView = [[UITableView alloc]initWithFrame:CGRectMake(100, 100, 100, 100)];
    
    mainTableView.backgroundColor = [UIColor greenColor];
    
    [self.view addSubview:mainTableView];
    
    [mainTableView mas_makeConstraints:^(MASConstraintMaker *make){
        
        make.top.equalTo(self.view).offset(10);
        make.left.equalTo(self.view).offset(10);
        make.right.equalTo(self.view).offset(10);
        make.top.equalTo(self.view).offset(10);
        
        make.top.right.bottom.left.equalTo(self.view).offset(10);
        
    }];
    
    
    
    
    
}



- (IBAction)clickRunJS:(id)sender {
    
    [self lys_viewDidLoad];
    
}





@end
