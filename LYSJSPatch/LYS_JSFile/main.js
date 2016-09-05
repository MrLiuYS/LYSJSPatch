/**
 *  导入js文件
 */
include('ButtonViewCtrl.js')


require('UITableView,UIColor,UITableViewCell');

/**
 *  动态定义变量
 *  defineClass() 第二个参数为类新增 property，格式为字符串数组，使用时与 OC property 接口一致
 */
defineClass('ViewController : UIViewController <UITableViewDelegate,UITableViewDataSource>', ['mainTable'], {


    //<<<<<<

    loadView: function() {

        self.super().loadView()

        /**
         *  添加新的 Property
         */
        self.setMainTable(UITableView.alloc().init())

    },


    lys__viewDidLoad: function() {

        var pMainTable = self.mainTable();

        pMainTable.setDelegate(self);
        pMainTable.setDataSource(self);


        pMainTable.setBackgroundColor(UIColor.greenColor());

        self.view().addSubview(pMainTable);

        pMainTable.mas__makeConstraints(block('MASConstraintMaker*', function(make) {

            make.top().equalTo()(self.view()).offset()(10);
            make.left().equalTo()(self.view()).offset()(10);
            make.right().equalTo()(self.view()).offset()(-10);
            make.bottom().equalTo()(self.view()).offset()(-10);


        }));

    },


    /**
     *  <UITableViewDelegate,UITableViewDataSource>
     */
    numberOfSectionsInTableView: function(tableView) {

        return 1;

    },
    tableView_numberOfRowsInSection: function(tableView, section) {

        return 10;

    },
    tableView_cellForRowAtIndexPath: function(tableView, indexPath) {

        var cell = tableView.dequeueReusableCellWithIdentifier("cell")

        if (!cell) {

            cell = UITableViewCell.alloc().initWithStyle_reuseIdentifier(0, "cell")

        }

        var text = "";

        switch (indexPath.row()) {

            case 0:
                text = "UIButton";
                break;

            case 1:
                text = "UILabel";
                break;

            default:
                break;

        }

        cell.textLabel().setText(text);

        return cell;

    },

    tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {

        ButtonViewCtrl.pushInViewController(self);


    },



    //>>>>>>


});