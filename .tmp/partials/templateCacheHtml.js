angular.module("workshop").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/accountList/accountList.html","<div class=\"account-list\"><div ng-repeat=\"account in vm.accountList.accounts\"><div>{{ \'AccountList.NAME\' | translate }} {{ account.name}}</div><div>{{ \'AccountList.TYPE\' | translate }} {{ account.type}}</div><div>{{ \'AccountList.BALANCE\' | translate }} {{ account.balance | currency }}</div></div></div>");
$templateCache.put("app/components/localeSelector/localeSelector.html","<nav class=\"locale-selector\"><select ng-model=\"vm.current\" ng-change=\"vm.change(vm.current)\"><option value=\"en\">{{ \'Locale.EN\' | translate }}</option><option value=\"fr\">{{ \'Locale.FR\' | translate }}</option><option value=\"gb\">{{ \'Locale.GB\' | translate }}</option></select></nav>");
$templateCache.put("app/components/navbar/navbar.html","<nav class=\"navbar\"><a href=\"https://github.com/Swiip/generator-gulp-angular\">{{ \'Nav.GULP\' | translate}}</a><ul><li class=\"active\"><a ng-href=\"#\">{{ \'Nav.HOME\' | translate }}</a></li><li><a ng-href=\"#\">{{ \'Nav.ABOUT\' | translate }}</a></li><li><a ng-href=\"#\">{{ \'Nav.CONTACT\' | translate }}</a></li><li><a ng-href=\"#\">{{ 1000 | currency }}</a></li><li><a ng-href=\"#\">{{ vm.now | date:\'short\' }}</a></li></ul><ul class=\"acme-navbar-text\"><li>{{ \'Nav.CREATED\' | translate}} {{ vm.relativeDate }}.</li><li><locale-selector></locale-selector></li></ul></nav>");}]);