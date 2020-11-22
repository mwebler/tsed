(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{896:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"openspecjsonschema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openspecjsonschema"}},[t._v("#")]),t._v(" OpenSpecJsonSchema "),a("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { OpenSpecJsonSchema } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/openspec"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.10.3/packages/openspec/src/common/OpenSpecJsonSchema.ts#L0-L0"}},[t._v("/packages/openspec/src/common/OpenSpecJsonSchema.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" OpenSpecJsonSchema<"),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecBaseJsonSchema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecBaseJsonSchema")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * "),a("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/Required.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Required")])]),t._v(' if type is "array". Describes the type of items in the array.\n     */\n    items?'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(" | "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecRef")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A free-form property to include an example of an instance for this schema.\n     */\n    required?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),a("a",{pre:!0,attrs:{href:"/api/di/decorators/Value.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Value")])]),t._v(" can be "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" or object. Inline or referenced schema MUST be of a "),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(" Object and not a standard JSON "),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(".\n     */\n    additionalProperties?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),a("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/Property.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Property")])]),t._v(" definitions MUST be a "),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(" Object and not a standard JSON "),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inline or referenced"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    properties?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Inline or referenced schema MUST be of a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#schemaObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and not a standard JSON "),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(".\n     */\n    allOf?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(" | "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecRef")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Additional external documentation for this schema.\n     */\n    example?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("items?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(" | "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecRef")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v('Required if type is "array". Describes the type of items in the array.')])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("required?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("A free-form property to include an example of an instance for this schema.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("additionalProperties?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Value can be boolean or object. Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("properties?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Property definitions MUST be a Schema Object and not a standard JSON Schema (inline or referenced).")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("allOf?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(" | "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecRef")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Inline or referenced schema MUST be of a "),a("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#schemaObject",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schema Object"),a("OutboundLink",{pre:!0})],1),t._v(" and not a standard JSON Schema.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("example?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Additional external documentation for this schema.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);