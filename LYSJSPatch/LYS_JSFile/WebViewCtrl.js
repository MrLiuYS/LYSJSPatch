require('UIWebView,UIColor,NSNumber,NSURLRequest,NSURL');

defineClass('WebViewCtrl : UIViewController <UIWebViewDelegate>', {

  /**
   * 实例方法
   */

  viewDidLoad: function() {

    self.ORIGviewDidLoad();

    self.setTitle("UIWebView")

    self.view().setBackgroundColor(UIColor.lightGrayColor());

    var pWebView = self.createWebView();

    pWebView.setDelegate(self);

    self.view().addSubview(pWebView);

    pWebView.mas__makeConstraints(block('MASConstraintMaker*', function(make) {

      make.top().equalTo()(self.view()).offset()(10);
      make.left().equalTo()(self.view()).offset()(10);
      make.right().equalTo()(self.view()).offset()(-10);
      make.bottom().equalTo()(self.view()).offset()(-10);

    }));

    self.loadWeb_urlStr(pWebView, "https://github.com/MrLiuYS/LYSJSPatch")

  },

  loadWeb_urlStr: function(aWebView, aUrlStr) {

    /**
     * 如果只是使用一下代码. 在第一次运行的时候.会出现乱码的现象. 
     * 可以使用performSelectorInOC 创建一次. 下一次正常
     * 
     * 
     * defineClass("JPViewController", {
      viewDidLoad: function() { 
        var slf = self;
        return UIWebView.alloc().performSelectorInOC('initWithFrame:', [self.view().bounds()],function(webView){
            var url = NSURL.alloc().initWithString("http://www.apple.com");
            webView.loadRequest(NSURLRequest.requestWithURL(url));
            slf.view().addSubview(webView);
        });
      }
    }
    
     * 也可以直接在AppDelegate.m中 
     * - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
        // Override point for customization after application launch.
        
        UIWebView *view = [[UIWebView alloc]init];
        view.frame = CGRectZero;

     */
    var pUrl = NSURL.URLWithString(aUrlStr);

    var pRequest = NSURLRequest.requestWithURL(pUrl);

    aWebView.loadRequest(pRequest);

  },

  /**
   *  创建webview
   */
  createWebView: function() {

    var webView = UIWebView.alloc().init();

    return webView;

  },

  /*
  UIWebViewDelegate
   */
  /*
  
  解决:使用webView_shouldStartLoadWithRequest_navigationType 会引起崩溃
  第一: 头部添加<UIWebViewDelegate>
        defineClass('WebViewCtrl : UIViewController <UIWebViewDelegate>'

  第二: 在 "AppDelegate.h" 添加 UIWebViewDelegate 的声明 : 
        @interface AppDelegate () <UIWebViewDelegate>

        ???不知道有没有其他更好的方法
   */
  webView_shouldStartLoadWithRequest_navigationType: function(webView, request, navigationType) {

    console.log("shouldStartLoadWithRequest");

    return true;
  },
  webViewDidStartLoad: function(webView) {
    console.log("webViewDidStartLoad");
  },
  webViewDidFinishLoad: function(webView) {
    console.log("webViewDidFinishLoad");
  },
  webView_didFailLoadWithError: function(webView, error) {
    console.log("didFailLoadWithError");
  },



}, {

  /**
   * 类方法
   */
  pushInViewController: function(aViewController) {

    var ctrl = WebViewCtrl.alloc().init();

    aViewController.navigationController().pushViewController_animated(ctrl, YES);

  },
});