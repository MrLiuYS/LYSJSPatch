require('UITableView,UITableViewCell,UIColor,NSNumber,MJRefreshNormalHeader');

defineClass('MJRefreshViewCtrl : UIViewController <UITableViewDelegate,UITableViewDataSource>', ['mainTable'], {

  /**
   * 实例方法
   */
  loadView: function() {

    self.super().loadView()

    /**
     *  添加新的 Property
     */
    self.setMainTable(self.createTableView())

  },

  /**
   *  创建按钮
   */
  createTableView: function() {

    var tableView = UITableView.alloc().init();

    tableView.setDelegate(self);
    tableView.setDataSource(self);

    tableView.setHeader(MJRefreshNormalHeader.headerWithRefreshingTarget_refreshingAction(self, "loadNewData"));

    return tableView;

  },

  viewDidLoad: function() {

    self.ORIGviewDidLoad();

    self.setTitle("MJRefreshViewCtrl")

    self.view().setBackgroundColor(UIColor.whiteColor());

    var pTableView = self.mainTable();

    self.view().addSubview(pTableView);

    pTableView.mas__makeConstraints(block('MASConstraintMaker*', function(make) {

      make.top().equalTo()(self.view()).offset()(10);
      make.left().equalTo()(self.view()).offset()(10);
      make.right().equalTo()(self.view()).offset()(-10);
      make.bottom().equalTo()(self.view()).offset()(-10);

    }));


  },



  loadNewData: function() {

    var slf = self;
    dispatch_after(3.0, function() {

      slf.mainTable().header().endRefreshing();


    })


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

    var text = "cell " + indexPath.row();

    cell.textLabel().setText(text);

    return cell;

  },

  tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {


    tableView.header().beginRefreshing();

  },



}, {

  /**
   * 类方法
   */
  pushInViewController: function(aViewController) {

    var ctrl = MJRefreshViewCtrl.alloc().init();

    aViewController.navigationController().pushViewController_animated(ctrl, YES);

  },
});