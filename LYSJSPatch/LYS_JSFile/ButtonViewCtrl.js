require('UIButton,UIColor,NSNumber');

defineClass('ButtonViewCtrl : UIViewController ', {

   /**
    * 实例方法
    */

   viewDidLoad: function() {

      self.ORIGviewDidLoad();

      self.setTitle("UIButton")

      self.view().setBackgroundColor(UIColor.whiteColor());

      var button = self.createButton();

      self.view().addSubview(button);

      button.mas__makeConstraints(block('MASConstraintMaker*', function(make) {

         make.top().equalTo()(self.view()).offset()(10);
         make.left().equalTo()(self.view()).offset()(10);
         make.right().equalTo()(self.view()).offset()(-10);
         make.height().equalTo()(NSNumber.numberWithInt(40));

      }));


   },

   /**
    *  创建按钮
    */
   createButton: function() {

      var button = UIButton.alloc().init();

      button.setBackgroundColor(UIColor.lightGrayColor());

      button.setTitle_forState("按钮", 0);

      /**
       *  JS使用字符串代表 Selector
       */
      button.addTarget_action_forControlEvents(self, "clickButton:", 5);

      return button;

   },


   clickButton: function(aButton) {


      var alertView = require('UIAlertView')
         .alloc()
         .initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles(
            "Alert",
            "点击了按钮",
            self,
            "OK",
            null
         )
      alertView.show()


   },


}, {

   /**
    * 类方法
    */
   pushInViewController: function(aViewController) {

      var ctrl = ButtonViewCtrl.alloc().init();

      aViewController.navigationController().pushViewController_animated(ctrl, YES);

   },
});