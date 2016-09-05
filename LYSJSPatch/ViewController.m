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
    
    
    mainTableView.delegate = self;
    mainTableView.dataSource = self;
    
    
}

#pragma mark - UITableViewDataSource

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    
    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    
    return 10;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"cell"];
    
    if (!cell) {
        cell = [[UITableViewCell alloc]initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"cell"];
    }
    
    NSString * text = @"";
    switch (indexPath.row) {
        case 0:
            text = @"按钮";
            break;
            
        default:
            break;
    }
    
    cell.textLabel.text = text;
    
    return cell;
}

#pragma mark - UITableViewDelegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    
}



- (IBAction)clickRunJS:(id)sender {
    
    [self lys_viewDidLoad];
    
}





@end
