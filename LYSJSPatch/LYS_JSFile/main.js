
require('UITableView,UIColor');
defineClass('ViewController', {
            
            
            //<<<<<<
            
            lys__viewDidLoad: function() {
            
            var mainTableView = UITableView.alloc().initWithFrame({x:20, y:200, width:100, height:100});
            
            mainTableView.setBackgroundColor(UIColor.greenColor());
            
            self.view().addSubview(mainTableView);
            
            mainTableView.mas__makeConstraints(block('MASConstraintMaker*', function(make) {
                                                     
                                                     make.top().equalTo()(self.view()).offset()(10);
                                                     make.left().equalTo()(self.view()).offset()(10);
                                                     make.right().equalTo()(self.view()).offset()(-10);
                                                     make.bottom().equalTo()(self.view()).offset()(-10);
                                                     
                                                     
                                                     }));
            
            },
            
            
            //>>>>>>
            
            
            });


