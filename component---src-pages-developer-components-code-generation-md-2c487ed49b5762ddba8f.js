"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[9058],{38348:function(e,o,n){n.r(o),n.d(o,{_frontmatter:function(){return s},default:function(){return l}});var t=n(87462),a=n(63366),r=(n(15007),n(64983)),i=n(91515),d=["components"],s={},c={_frontmatter:s},m=i.Z;function l(e){var o=e.components,n=(0,a.Z)(e,d);return(0,r.mdx)(m,(0,t.Z)({},c,n,{components:o,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"overview-of-code-generation-codegen-over"},"Overview of code generation {#codegen-over}"),(0,r.mdx)("p",null,"The Adobe Commerce and Magento Open Source applications generate code to create non-existent classes. As an example, look at the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Customer/Model/ResourceModel/AddressRepository.php"},"Magento/Customer/Model/Resource/AddressRepository")," constructor. A snippet follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"...\npublic function __construct(\n    \\Magento\\Customer\\Model\\AddressFactory $addressFactory,\n...\n")),(0,r.mdx)("p",null,"The first constructor parameter has a type of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\Customer\\Model\\AddressFactory"),". However, this class does not exist in ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Customer\\Model")," in the codebase. The application ",(0,r.mdx)("em",{parentName:"p"},"generates")," this class because its name uses a recognized convention (in this case, because the name ends with ",(0,r.mdx)("inlineCode",{parentName:"p"},"Factory"),")."),(0,r.mdx)("p",null,"Unlike some other languages or libraries, you can look at the generated code on the file system to see what really happens and still debug the code."),(0,r.mdx)("h3",{id:"when-is-code-generated-codegen-over-when"},"When is code generated? {#codegen-over-when}"),(0,r.mdx)("p",null,"Provided that the application is not set to ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/bootstrap/magento-modes.html#production-mode"},"production mode"),", code is generated when the application cannot find a class when executing code."),(0,r.mdx)("p",null,"In particular,"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"A Factory class creates instances of a type. See ",(0,r.mdx)("a",{parentName:"p",href:"factories.md"},"Instantiating objects with factories")," for more information. Factories are directly referenced within application code.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"You can designate a Proxy to be generated for a type in order to ensure the type is not instantiated until it is needed. See ",(0,r.mdx)("a",{parentName:"p",href:"proxies.md"},"Proxies")," for more information. Proxies are directly referenced within ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/dependency-injection"},"dependency injection")," configuration.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Interceptor classes are automatically generated to facilitate Magento's plugin system. An interceptor class extends a type and is returned by the Object Manager to allow multiple plugin classes to inject logic into different methods. Interceptors work behind the scenes and are ",(0,r.mdx)("em",{parentName:"p"},"not")," directly referenced in application code."))),(0,r.mdx)("p",null,"You can also use the ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-compiler.html"},"code compiler"),' to generate code at any time. "Compiling" your application means performing code generation for any eligible class encountered by the configuration/code scanner, as well as performing a number of different ',(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/dependency-injection"},"dependency injection")," optimizations."),(0,r.mdx)("h3",{id:"why-should-you-regenerate-code-codegen-over-why"},"Why should you regenerate code? {#codegen-over-why}"),(0,r.mdx)("p",null,"Suppose a Proxy class for a Customer class is generated, and the Customer class has new methods added to it. Because a Proxy exists on the file system, it is not regenerated. However, the Proxy implementation is now incomplete because it does not have the new Customer class methods. In this case, you must regenerate the Proxy class."),(0,r.mdx)("p",null,"If the code generator implementation itself is changed, you must regenerate all the classes. This is rare, however."),(0,r.mdx)("h3",{id:"advantages-of-generating-code-codegen-over-adv"},"Advantages of generating code {#codegen-over-adv}"),(0,r.mdx)("p",null,"Code generation is required in Adobe Commerce and Magento Open Source. Generating code assures you of the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The code is correct. You don’t have to worry that the generated code is delegating to the wrong method or forgetting a semicolon, and you don’t have to write tests for the generated code.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Code generation writes the boilerplate code to enable you to write more challenging and interesting code.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Consistent implementation."),(0,r.mdx)("p",{parentName:"li"},"All generated Factories work the same way. After you know how one Factory works, you know how they all work."))),(0,r.mdx)("h2",{id:"object-manager-responsibility-for-code-compilation-codegen-om"},"Object Manager responsibility for code compilation {#codegen-om}"),(0,r.mdx)("p",null,"When code changes as discussed in the preceding section, the Object Manager compiles it."),(0,r.mdx)("p",null,"The code compiler creates the ",(0,r.mdx)("inlineCode",{parentName:"p"},"generated/metadata/global.php")," file, which is a PHP serialized map of all constructor definitions mixed with object linking configuration defined in di.xml. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml")," file is the ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/dependency-injection"},"dependency injection")," configuration. There is a global ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/etc/di.xml")," file, and there can also be a ",(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml")," file for every ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module"),"."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-code-generation-md-2c487ed49b5762ddba8f.js.map