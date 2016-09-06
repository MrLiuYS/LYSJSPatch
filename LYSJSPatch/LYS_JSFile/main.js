/**
 *  导入js文件
 */
include('ButtonViewCtrl.js')
include('LabelViewCtrl.js')
include('WebViewCtrl.js')
include('ColorViewCtrl.js')


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
        self.setMainTable(self.createTabel())

    },

    createTabel: function() {
        var table = UITableView.alloc().init()
        return table
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

        return 20;

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

            case 2:
                text = "UIWebView";
                break;

            case 3:
                text = "UIColor";
                break;

            default:
                break;

        }

        cell.textLabel().setText(text);

        return cell;

    },

    tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {

        switch (indexPath.row()) {

            case 0:

                ButtonViewCtrl.pushInViewController(self)
                break;

            case 1:

                LabelViewCtrl.pushInViewController(self)
                break;

            case 2:

                WebViewCtrl.pushInViewController(self)
                break;

            case 3:

                ColorViewCtrl.pushInViewController(self)
                break;

            default:
                break;

        }



    },



    //>>>>>>


});