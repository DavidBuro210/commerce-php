"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[918],{72912:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return l}});var r=a(87462),t=a(63366),o=(a(15007),a(64983)),m=a(91515),i=["components"],p={},s={_frontmatter:p},d=m.Z;function l(e){var n=e.components,a=(0,t.Z)(e,i);return(0,o.mdx)(d,(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Components, including modules, themes, and language packages, must be registered in the system through the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ComponentRegistrar")," class."),(0,o.mdx)("p",null,"Each component must have a file called ",(0,o.mdx)("inlineCode",{parentName:"p"},"registration.php")," in its root directory. For example, here is the ",(0,o.mdx)("inlineCode",{parentName:"p"},"registration.php")," file for Magento's ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/AdminNotification/registration.php"},"AdminNotification module"),". Depending on the type of component, registration is performed through ",(0,o.mdx)("inlineCode",{parentName:"p"},"registration.php")," by adding to it as follows:"),(0,o.mdx)("h2",{id:"register-modules-register-modules"},"Register modules {#register-modules}"),(0,o.mdx)("p",null,"Register modules with:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"ComponentRegistrar::register(ComponentRegistrar::MODULE, '<VendorName_ModuleName>', __DIR__);\n")),(0,o.mdx)("p",null,"Here ",(0,o.mdx)("inlineCode",{parentName:"p"},"<VendorName>")," is the name of the company providing the ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"<ModuleName>")," is the name of the module."),(0,o.mdx)("p",null,'Avoid using "Ui" for your custom module name because the ',(0,o.mdx)("code",null,"%Vendor%_Ui")," notation, required when specifying paths, might cause issues."),(0,o.mdx)("h3",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"use Magento\\Framework\\Component\\ComponentRegistrar;\n\nComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_AdminNotification', __DIR__);\n")),(0,o.mdx)("h2",{id:"register-themes-register-themes"},"Register themes {#register-themes}"),(0,o.mdx)("p",null,"Register themes with:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"ComponentRegistrar::register(ComponentRegistrar::THEME, '<area>/<vendor>/<theme name>', __DIR__);\n")),(0,o.mdx)("p",null,"Here ",(0,o.mdx)("inlineCode",{parentName:"p"},"<area>")," is the functional area of the module (frontend, controller, and so on.), ",(0,o.mdx)("inlineCode",{parentName:"p"},"<vendor>")," is the name of the company providing the theme, and ",(0,o.mdx)("inlineCode",{parentName:"p"},"<theme name>")," is the name of the ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/theme"},"theme"),"."),(0,o.mdx)("h3",{id:"example-1"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"use Magento\\Framework\\Component\\ComponentRegistrar;\n\nComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/Magento/luma', __DIR__);\n")),(0,o.mdx)("h2",{id:"register-language-packages-register-langpacks"},"Register language packages {#register-langpacks}"),(0,o.mdx)("p",null,"Register language packages with:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, '<VendorName>_<packageName>', __DIR__);\n")),(0,o.mdx)("p",null,"Here ",(0,o.mdx)("inlineCode",{parentName:"p"},"<VendorName>")," is the name of the company providing the package and ",(0,o.mdx)("inlineCode",{parentName:"p"},"<packageName>")," is the name of the package."),(0,o.mdx)("h3",{id:"example-2"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"use Magento\\Framework\\Component\\ComponentRegistrar;\n\nComponentRegistrar::register(ComponentRegistrar::LANGUAGE, 'magento_de_de', __DIR__);\n")),(0,o.mdx)("h2",{id:"register-libraries-register-libraries"},"Register libraries {#register-libraries}"),(0,o.mdx)("p",null,"Libraries should be registered using"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"ComponentRegistrar::register(ComponentRegistrar::LIBRARY, '<vendor>/<library_name>', __DIR__);\n")),(0,o.mdx)("p",null,"Here ",(0,o.mdx)("inlineCode",{parentName:"p"},"<vendor>")," is the name of the company providing the library. ",(0,o.mdx)("inlineCode",{parentName:"p"},"<library_name>")," is the library name."),(0,o.mdx)("h3",{id:"example-3"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"use Magento\\Framework\\Component\\ComponentRegistrar;\n\nComponentRegistrar::register(ComponentRegistrar::LIBRARY, 'magento/framework', __DIR__);\n")),(0,o.mdx)("h2",{id:"invoke-registrationphp-in-composerjson-with-autoload-register-autoload"},"Invoke ",(0,o.mdx)("inlineCode",{parentName:"h2"},"registration.php")," in ",(0,o.mdx)("inlineCode",{parentName:"h2"},"composer.json")," with autoload {#register-autoload}"),(0,o.mdx)("p",null,"After you create your ",(0,o.mdx)("inlineCode",{parentName:"p"},"registration.php")," file and you are creating ",(0,o.mdx)("a",{parentName:"p",href:"composer-integration.md"},"your component's composer.json file"),", invoke your ",(0,o.mdx)("inlineCode",{parentName:"p"},"registration.php")," file in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"autoload")," section of ",(0,o.mdx)("inlineCode",{parentName:"p"},"composer.json"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "Acme-vendor/bar-component",\n "autoload": {\n    "psr-4": { "AcmeVendor\\\\BarComponent\\\\": "" },\n    "files": [ "registration.php" ]\n }\n}\n')),(0,o.mdx)("h3",{id:"sample-registrationphp-file-register-sample"},"Sample ",(0,o.mdx)("inlineCode",{parentName:"h3"},"registration.php")," file {#register-sample}"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"use Magento\\Framework\\Component\\ComponentRegistrar;\n\nComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_AdminNotification', __DIR__);\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-build-component-registration-md-6ad199c5b7565d9d95de.js.map