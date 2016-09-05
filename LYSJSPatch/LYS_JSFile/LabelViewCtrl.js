require('UILabel,UIColor,NSNumber');

defineClass('LabelViewCtrl : UIViewController ', {

  /**
   * 实例方法
   */

  viewDidLoad: function() {

    self.ORIGviewDidLoad();

    self.setTitle("UILabel")

    self.view().setBackgroundColor(UIColor.whiteColor());

    var label = self.createLabel();

    self.view().addSubview(label);

    label.mas__makeConstraints(block('MASConstraintMaker*', function(make) {

      make.top().equalTo()(self.view()).offset()(10);
      make.left().equalTo()(self.view()).offset()(10);

    }));


  },

  /**
   *  创建Label
   */
  createLabel: function() {

    var label = UILabel.alloc().init();

    label.setBackgroundColor(UIColor.lightGrayColor());

    label.setText("label");

    return label;

  },



}, {

  /**
   * 类方法
   */
  pushInViewController: function(aViewController) {

    var ctrl = LabelViewCtrl.alloc().init();

    aViewController.navigationController().pushViewController_animated(ctrl, YES);

  },
});