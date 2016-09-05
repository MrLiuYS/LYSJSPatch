
require('UITableView,UIColor');

/**
 *  动态定义变量
 *  defineClass() 第二个参数为类新增 property，格式为字符串数组，使用时与 OC property 接口一致
 */
defineClass('ViewController', ['mainTable'], {
            
            
            //<<<<<<
            
            loadView: function() {
            
            self.super().loadView()
            
            /**
             *  添加新的 Property
             */
            self.setMainTable( UITableView.alloc().init() )
            
            },
            
            
            lys__viewDidLoad: function() {
            
            var pTableView = self.mainTable()
            
            pTableView.setBackgroundColor(UIColor.greenColor());
            
            self.view().addSubview(pTableView);
            
            pTableView.mas__makeConstraints(block('MASConstraintMaker*', function(make) {
                                                  
                                                  make.top().equalTo()(self.view()).offset()(10);
                                                  make.left().equalTo()(self.view()).offset()(10);
                                                  make.right().equalTo()(self.view()).offset()(-10);
                                                  make.bottom().equalTo()(self.view()).offset()(-10);
                                                  
                                                  
                                                  }));
            
            },
            
            
            //>>>>>>
            
            
            });


