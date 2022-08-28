---
title: "Create A Programming Language"
author: "Aung Myat Moe"
---


:::tip Author
The creator of this small progrmming language.
— Aung Myat Moe
:::

# Calculator Programming Language

Let's create a tiny programming language names `calculator-lang`.

:::danger BE AWARE
This article is not enough to build a full-featured programming language.
:::

## Introduction

Program တစ်ခုတည်ဆောက်ချင်ပြီဆိုတာနဲ့ Programming Language တစ်ခုကိုလေ့လာရပါတယ်။ Program တစ်ခုရေးဖို့ Programming Language
တစ်ခုလိုအပ်လို့ဖြစ်‌တယ်။ဒီ့ထက်ပိုလိုအပ်တဲ့အခါမျိုးတွေလည်းရှိလိမ့်မယ်။
ဉပမာ - E commerce Website တစ်ခုရေးမယ်ဆိုရင် Frontend အတွက် JavaScript ၊ Backend အတွက် PHP ကိုသုံးရတဲ့အခါမျိုးပေါ့။

Programming Language တစ်ခုကိုတော့လေ့လာဖူးတယ်။ ကိုယ်လေ့လာလိုက်တဲ့ Programming Language က
နောက်ကွယ်မှာဘယ်လိုအလုပ်လုပ်သွားလဲဆိုတာသိချင်တယ်။
ခု Article က အဲ့လို Curious ဖြစ်တဲ့သူတွေအတွက်သင့်တော်ပါမယ်။

ခု Article မှာ Programming Language တစ်ခု ယေဘုယျအားဖြင့်လုပ်ဆောင်သွားတဲ့ပုံကိုလူနားလည်အောင်ရေးသွားမှာဖြစ်ပါတယ်။
လက်တွေ့လိုက်လုပ်မယ့်သူတွေကတော့လိုအပ်ချက်အနည်းငယ်ရှိပါတယ်။ JS နဲ့ NodeJS ကို File System ‌(FS module)
အသုံးပြုပုံကိုသိထားဖို့လိုအပ်ပါတယ်။

## Theory Phase

We need to understand some basic terminologies. So, you must read this phase before implementation of `calculator-lang`.

## Language Design

Language Design ကတော့ရိုးရှင်းပါတယ်။
ပေါင်းမယ်။နှုတ်မယ်။ ဒီလောက်ပါပဲ။ Operator Precedent တော့မပါဘူး။

**Example Program**

```
1 +  2 + 3
```

## Basic Computing

Computer တစ်ခုတည်ဆောက်ချင်တဲ့အခါ သူ့ရဲ့ Abstract Model တွေကိုသတ်မှတ်ဖို့လိုအပ်တယ်။
Abstract Model ဆိုတာ Instruction Set Architecture (ISA) လို့ခေါ်တယ်။
ISA ဆိုတာ ဘယ်လိုကောင်မျိုးတွေလည်း‌ဆိုတော့ Data Type ‌တွေ၊ Register Values တွေ၊ I/O (Input Output) လုပ်ငန်းတွေ နဲ့
Machine Language Instructions တွေပဲဖြစ်တယ်။
ISA ကိုအလွယ်ပြောရရင် Computer တစ်လုံးမှာလိုအပ်တဲ့ Element လေးတွေကိုသတ်မှတ်တဲ့လုပ်ငန်းစဉ်လို့မှတ်လို့ရပါတယ်။

Instruction တွေကို Instruction Code တွေနဲ့ဖွဲ့စည်းထားတယ်။
Instruction Code ဆိုတာ CPU ပေါ်မှာတိုက်ရိုက်အလုပ်လုပ်နိုင်တဲ့ကောင်တွေကိုပြောတာ။ opcode (သို့မဟုတ်) p-code (သို့မဟုတ်)
Binary Numbers လို့လည်းခေါ်တယ်။
opcode တွေကို Atoms of Computing လို့ခေါ််တယ်။
Atom က Matter တွေအတွက်အသေးဆုံးဆိုတော့ Computing မှာဆိုရင်လည်း opcode တွေကအသေးဆုံးပဲလို့ပြောချင်တာဖြစ်တယ်။

opcode လေးတွေက CPU ပေါ်မှာတိုက်ရိုက်အလုပ်လုပ်နိုင်တယ်။ Machine Language လို့ခေါ်ပါတယ်။
opcode လေးတွေကို CPU အလိုက် Table နဲ့ဖော်ပြကြတယ်။
Intel ရဲ့ x86 ‌assembly opcode table ကိုသွားကြည့်လို့ရတယ်။

http://sparksandflames.com/files/x86InstructionChart.html

## Assembly Language

Opcode တွေကမှတ်ရခက်တဲ့အတွက် Opcode ကို Name ခေါ်သုံးလို့ရတဲ့ Assembly Language ကိုဖန်တီးလိုက်တယ်။ ဒါ့ကြောင့် Assembly
ကိုသုံးပြီး Machine Language ကို Translate လုပ်ကာ Computer
ကိုကိုယ်လုပ်ဆောင်စေချင်တဲ့လုပ်‌ဆောင်ချက်တွေကိုလုပ်ဆောင်‌ခိုင်းလို့ရတယ်။ Assembly သုံးပြီး Translate လုပ်တဲ့ဖြစ်စဉ်ကို
Assembler လုပ်တယ်လို့ခေါ်တယ်။

## Compiler

Compiler ဆိုတာ Program တစ်ခုပါပဲ။
သူက Source Program တစ်ခုကိုယူပြီးတော့ Machine မှာအလုပ်လုပ်နိုင်တဲ့ကောင်ကိုပြန်ထုတ်ပေးတယ်။
ဉပမာ - Rust နဲ့ Program တစ်ခုရေးထားတယ်‌ဆိုပါစို့။
Rust Compiler က ရေးထားတဲ့ Program Code တွေကိုယူပြီး Analysis လုပ်တယ်။
အဲ့နောက်မှာ Native Executable Code တွေပြန်ထုတ်ပေးတယ်။ Native Code တွေက CPU ပေါ်မှာ Run လို့ရတယ်။ ဒါက Rust Compiler
ရဲ့အခြေခံအလုပ်လုပ်ပုံ။

Compiler တစ်ခုတည်ဆောက်မယ်ဆိုရင် Front End နဲ့ Backend ဆိုတဲ့ လုပ်ငန်းစဉ်နှစ်ခုလုပ်ရတယ်။

Frontend မှာ Source Code ကနေ Abstract Syntax Tree (AST) ရအောင် ထုတ်တယ်။
Backend ကတော့ Frontend ကထွက်လာတဲ့ AST ကိုယူပြီး Bytecode (သို့မဟုတ်) Native Code ထုတ်တယ်။ Transpiler မှာတော့ Higher
Level Programming Language တစ်ခုပြန်ထွက်လာမယ်။

Compiler မှာသုံးတဲ့ JIT,AOT နဲ့ VM စတဲ့ Technology အကြောင်းကိုမပြောတော့ဘူး။ကျွန်တော်တို့ရေးသွားမှာက Transpiler
မို့လို့ပါ။

## Transpiler

Transpiler ဆိုတာသူလည်း Source Program ကိုယူတယ်။
Frontend မှာ AST ထုတ်တယ်။
Backend မှာ Code Generate တယ်။
ကွာတာက Higher Level Programming Language တစ်ခုကိုပြန်ထုတ်ပေးတာ။
ဉပမာ - Typescript လိုမျိုးပေါ့။

Grammar, Lexical Analysis, Syntax Analysis and Parsing

Programming Language တိုင်းမှာ Formal Grammar (ရေးထုံးသဒ္ဒါ) လိုအပ်တယ်။
Grammar ကို ရေးထုံးမှန်မမှန်စစ်တဲ့အခါမျိုးမှာသုံးပါတယ်။

Example

Subject + Verb + Object ဆိုတဲ့ Grammar တစ်ခုရှိတယ်ဆိုပါစို့။
ပြီးရင်အောက်ကစာကြောင်းမှန်၊ မမှန် Analysis လုပ်ကြည့်မယ်။

```
I Love You
```

ပထမဆုံး Token လေးတွေခွဲရပါမယ်။
I သည် Subject။
Love သည် Verb။
You သည် Object။

Token/Lexeme လေးတွေခွဲတဲ့ လုပ်ငန်းစဉ်ကို Tokenizing/Lexical Analysis လို့ခေါ်တယ်။
Token တစ်ခုခြင်းစီကို မှန်၊မမှန်စစ်တယ်။
I နေရာမှာတစ်ခြားဟာဝင်နေသလားပေါ့။မမှန်ရင် Error ပြန်ပေးလိမ့်မယ်။

ပြီးရင် Grammar မှန်၊မမှန်စစ်တယ်။ Syntax Analysis/Parsing လို့ခေါ်တယ်။

Parse လုပ်တယ်ဆိုတာ Grammar မှန်တဲ့ Token လေးတွေကိုပြန်ပေးလိုက်တာပါပဲ။ Parse Tree ပြန်ထုတ်ပေးတယ်လို့လည်းခေါ်လို့ရပါတယ်။
Parser ကထွက်လာတဲ့ Parse Tree ကရှုပ်နေတဲ့အတွက် ဒီ့အတွက် ပိုရှင်းအောင် AST ဆောက်ပေးရပါတယ်။ ဒါမှသာ Backend ကနေ Code
Generate တဲ့အခါအဆင်ပြေမှာဖြစ်တယ်။

## Code Generation

Frontend ကရတဲ့ AST ကို Traverse လုပ်ပြီး ဆိုင်ရာဆိုင်ရာ Code ပြန်ထုတ်ပေးတယ်။
ဉပမာ - Rust ဆိုရင် Native Code ထုတ်ပေးမယ်။ Typescript ဆိုရင် JavaScript ပြန်ထုတ်ပေးတယ်။

## Practical Phase

အထက်ကအကျဉ်းချုပ်ထားတဲ့သီအိုရီကိုလက်‌တွေ့သုံးကြည့်ပါမယ်။
တကယ့် Programming Language တစ်ခုရေး‌တော့မယ်ဆိုရင် အကျယ်အထိသိဖို့လိုပါမယ်။
ကျွန်တော်ကတော့ အပေါ်ကရှင်းထားတဲ့သီအိုရီနဲ့ယှဉ်ပြီးတော့ တကယ်အလုပ်လုပ်တဲ့ Tiny Transpiler
လေးဆောက်သွားမှာမို့လို့အကျယ်မချဲ့တော့ဘူး။‌

ကျွန်တော်တို့ Project တစ်ခု Create ပါမယ်။

```sh
mkdir calcLang
```

Project Directory ထဲကိုဝင်ပါမယ်။

```sh
cd calcLang
touch parser.js
npm init -y 
```

ပြီးရင် Node Package တစ်ခုကို Install လုပ်ပါမယ်။

```sh
npm install --save nearley
```

Nearley က Parser Generator Tool ဖြစ်ပါတယ်။
ဒီ့အတွက်ကျွန်တော်တို့ကိုယ်တိုင် Parser ကိုမရေးတော့ပါဘူး။လိုချင်တဲ့ Grammar ကိုရေးပေးပြီးတော့ Nearley ကို Parser Generate
လုပ်ခိုင်းလိုက်မှာပဲဖြစ်ပါတယ်။

`App.js`ဖိုင်ကိုဖွင့်လိုက်ပါ။
အောက်ပါ Code တွေကိုထည့်လိုက်ပါ။

```js
const nearley = require("nearley");
const grammar = require("./grammar.js");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
parser.feed("foo\n");

// parser.results is an array of possible parsings.
console.log(parser.results); // [[[[ "foo" ],"\n" ]]]
```

Nearley ရဲ့ Getting started က Code တွေဖြစ်ပါတယ်။
https://nearley.js.org/docs/getting-started

ပြီးတဲ့နောက်မှာ `grammar.ne` ဆိုတဲ့ဖိုင်တစ်ဖိုင်တည်ဆောက်ပါမယ်။Grammar Rule တွေရေးဖို့အတွက်ဖြစ်ပါတယ်။

```sh
touch grammar.ne
```

Grammar ဖိုင်ထဲမှာအောက်က Grammar Rule တွေကိုရေးပါမယ်။

```
number -> [0-9]:+
```

အထက်မှာရေးထားတဲ့စာကြောင်းကို Production Rule လို့ခေါ်ပါတယ်။
Production Rule မှာ -> ရဲ့ ဘယ်ဘက်က Symbol ရှိပါမယ်။ ညာဘက်မှာတော့ symbol ကဘာပဲဖြစ်ရမယ်ဆိုပြီးသတ်မှတ်ပါတယ်။
ကျွန်တော်တို့ရေးတဲ့ Grammar ကို Context Free Grammar (CFG) လို့ခေါ်ပါတယ်။

အထက်က Production Rule ရဲ့အဓိပ္ပာယ်က number သည် 0 ကနေ 9 ထိဂဏန်းဖြစ်ရပါမယ်။
:+ ကတော့ တစ်လုံးထက်ပိုပြီးရှိရပါမယ်လို့ပြောတာပါ။ Regular Expression ကိုသုံးဖူးရင်သဘောပေါက်မှာပါ။
number (symbol) ကိုတော့ကြိုက်ရာနာမည်ပေးလို့ရပါတယ်။ သို့သော် အဓိပ္ပာယ်ရှိ‌တဲ့ နာမည်ကိုပေးဖို့လိုပါတယ်။

ခု Parser Generate ပါမယ်။

```bash
npx nearleyc grammar.ne -o grammar.js
```

ပြီးနောက် App.js ဖိုင်ထဲက paraer.feed("1") လို့ပြောင်းလိုက်ပါမယ်။

node parser.js လို့ Run လိုက်တဲ့အခါ Parse လုပ်လို့ရလာတဲ့ Result ကိုပြပါလိမ့်မယ်။
Parse လုပ်လို့ရလာတဲ့ Result ကို Parse Tree လို့ခေါ်ပါတယ်။

```js
[[['1']]]
```

Square Bracket ကတော့ Parse လုပ်ရတဲါအဆင့်တွေကိုပြတာပါ။
မူလကတည်းက [] ရှိပါမယ်။
Parse လုပ်တဲ့အခါ 1 ကို အထက်မှာရေးထားတဲ့ Production Rule ဖြစ်တဲ့ number အရ [[]] Bracket နှစ်ခုဖြစ်သွားပါတယ်။
1 သည် Grammar Rule အရမှန်တဲ့ Token ဖြစ်တဲ့အတွက် Array ထဲထည့်ပြီး‌ဖော်ပြပါတယ်။
ဒီ့အတွက် [ [ [ '1' ] ] ] ဖြစ်သွားရပါတယ်။
ကျွန်တော်တို့လိုချင်တာ ['1'] ပဲလိုချင်တာပါ။
ဒီ့အတွက် Production Rule ကိုအောက်ပါအတိုင်းပြောင်းပေးလို့ရပါတယ်။

```
number -> [0-9]:+ {%
data => data[0]
%}
```

Grammar Rule ပြောင်းပြီးရင် Parser ကို ပြန်ပြီးGenerate လုပ်ပေးရပါတယ်။

```bash
npx nearleyc grammar.ne -o grammar.js
```

ပြီးနောက် node parser.js လို့ Run ကြည့်ရင် [ [ '1' ] ] ရမှာပါ။
ကျွန်တော်တို့လိုချင်တာကိုရပါတော့မယ်။
Index No 0 လေးလိုချင်လို့ အောက်ပါအရှည်ကြီးရေးရတာကမကိုက်ပါဘူး။

```
{%
data => data[0]
%}
```

ဒီ့အတွက် အောက်ပါအတိုင်းပြောင်းရေးလို့ရပါတယ်။

```
number -> [0-9]:+ {% id %}
```

ပြန်စမ်းကြည့်ရင် အတူတူပဲဆိုတာကိုတွေ့ရမှာပါ။

ခု Grammar ကိုအောက်ပါအတိုင်းစရေးပါမယ်။

```
# ကျွန်တော်တို့ရဲ့ Language Design က 1 +1 ဖြစ်တဲ့အတွက် Expression မဧနဲ့အတူတူပဲတယ်။ဒီ့အတွက် ကျွန်တော်တို့ရဲ့ Program သည် Expression တွေပဲဖြစ်ပါတယ်လို့ကြေညာလိုက်ပါတယ်။ Index 0 ကိုပဲလိုချင်တာဖြစ်လို့ {% id %} ကိုသုံးထားတာဖြစ်ပါတယ်။

program -> expressions {% id %}

# ခု Expression တွေကို သတ်မှတ်ပါမယ်။
# Expression ဆိုတာ Expression တစ်ခုသို့မဟုတ် Expression အကြောင်းများစွာပါနေတဲ့ကောင်ဖြစ်ပါတယ်။
# Pipe Sign (|) သည် OR ကိုပြောတာဖြစ်ပါတယ်။
expressions -> _ expression _ {% 
                data => [data[1]]
              %}
            |  _ expression _ "\n" expressions {%
                data => [data[1],...data[4]]
              %}

# Expression တစ်ခုသည် Unary Expression (သို့မဟုတ်) Binary Expression လည်းဖြစ်နိုင်တယ်။
# Unary Expression ဆိုတာ တစ်ခုတည်းရှိတဲ့ကောင်တွေကိုပြောတာပါ။
# ဉပမာ 1,name စသဖြင့်။
# Binary Expression ဆိုတာ Root နဲ့ Node နှစ်ခုပါတဲ့ကောင်တွေကိုပြောဖြစ်ပါတယ်။
# ဉပမာ 1 + 2 သည် Binary Expression ဖြစ်ပါတယ်။အဘယ့်ကြောင့်ဆိုသော် + Root ရဲ့ ညာဘက်မှာ 1 ၊ ဘယ်ဘက်မှာ 2 ရှိနေလို့ဖြစ်ပါတယ်။
expression -> unary_expression {% id %} | binary_expression {% id %}

# Unary Expression ဆိုတာ Number လည်းဖြစ်နိုင်တယ်။
unary_expression -> number {% id %}

# Binary Expression‌ ဆိုတာ Unary Expression Operator နဲ့ Expression ကြီးတစ်ခုလုံးလည်းဖြစ်နိုင်တယ်။
# Expression တစ်ခုလုံးဖြစ်နိုင်တယ်ဆိုတာက 1 + 2 + 3 မှာ 1 သည် Unary Expression လို့မှတ်ယူလို့ရတယ်။ 2 + 3 ကြတော့ Binary Expression ဖြစ်တယ်။ Binary Expression သည် Expression ပဲဖြစ်တဲ့အတွက် Expression လို့ပုန်ခေါ်လိုက်တာဖြစ်တယ်။ Unary Expression ကြ‌တော့တစ်ခုတည်းမို့လို့ဖြစ်ပါတယ်။

binary_expression -> unary_expression _ operator _ expression {%

# ခု Expression ကရလာတဲ့ Data တွေကို Type နဲ့ Value သတ်မှတ်ပြီး Return ပြန်ပေးလိုက်ပါတယ်။
# Data တွေရဲ့ Index No စရေတဲ့အခါ -> ရဲ့ ‌ဘာဘက်ကနေစရေရပါတယ်။
data => {
    return {
        type: "binary_expression",
        rop: data[0],
        operator: data[2],
        lop: data[4]
    }
}

%}

# Operator သည် အပေါင်း (သို့မဟုတ်) အနှုတ်ဖြစ်နိုင်တယ်လို့သတ်မှတ်လိုက်ပါတယ်။ဆိုလိုတာက နှစ်ခုလုံးလက်ခံတယ်လို့ပြောချင်တာပါ။
operator -> "+" {% id %} 
          | "-" {% id %}

# Number သည် Decimal လည်းဖြစ်နိုင်သလို Digit လည်းဖြစ်နိုင်တယ်။
number -> decimal {% id %}
        | digit {% id %}

# Decimal သည် Digit နှစ်ခုကို Dot (.) နှင့်ဆက်ထားတာဖြစ်တယ်။
decimal -> digit "." digit {%

# String ဖြစ်နေတဲ့အတွက် Number ကိုပြောင်းပေးလိုက်တာပါ။
data => Number(data[0] + "." + data[2])

%}

# Digit သည် 0 ကနေ 9 ထိတစ်လုံး (သို့မဟုတ်) တစ်လုံးထက်ပိုမယ်လို့သတ်မှတ်လိုက်တာပါ။
digit -> [0-9]:+ {%

# Parse Tree ကနေထွက်လာမယ့် ကောင်(Token)တွေက Array Element တွေဖြစ်နေတဲ့အတွက်တစ်စုတစ်စည်းတည်း Join ပြီး Number ပြောင်းပေးလိုက်ပါတယ်။
# ဉပမာ - 123 ကို Parse လုပ်ရင်  [[['1','2','3']]] ထွင်လာမယ်။ Join လိုက်တဲ့အခါ ['123'] ဖြစ်သွားမှာဖြစ်တယ်။
data => Number(data[0].join(''))

%}

# _ (Optional White Space) သည်  Space (သို့မဟုတ်) Tab ပါလည်းရတယ်။မပါလည်းရတယ်။
_ -> [\s\t]:*

# __ (Space) အနည်းဆုံးတစ်ခုနှင့်တစ်ခုထက်ပိုရှိဖို့လိုအပ်တယ်။
__ -> [\s]:+
```

### Parser

`Parser.js` ကိုလည်းအောက်ပါအတိုင်းထပ်ထည့်ပါမယ်။

```js
const nearley = require("nearley");
const grammar = require("./grammar.js");

/*ဖိုင်တွေ Read ဖို့ Write ဖို့လိုအပ်တဲ့အတွက် FS Module ကို Import လိုက်ပါတယ်။*/
const fs = require('fs');

// Parser Instance Object တစ်ခုတည်ဆောက်လိုက်ပါတယ်။
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// CLI ကနေဝင်လာမဲ့ Program File Name ကိုယူလိုက်ပါတယ်။
const fileName = process.argv[2];

// Source Code တွေကို FS Module သုံးပြီးဖတ်လိုက်ပါတယ်။
const sourceCodes = fs.readFile(fileName, (err, data) => {
    if (err) throw err; // ဖိုင်ဖတ်လို့မရတဲ့အခါ Error ပြန်ပေးမှာပါ။

    /*File ကိုဖတ်လို့ရတဲ့ Data တွေကို String အဖြစ်ပြောင်းပြီး Parse ဆိုတဲ့ Function ကိုပို့ပေးလိုက်ပါတယ်။*/
    parse(data.toString())
})

/*Parse Function က Data တွေကိုလက်ခံပါတယ်။*/
const parse = (data) => {
    try {
        /*Parser ကနေ Parse လုပ်ပါတယ်။*/
        parser.feed(data);
        /*Parse လုပ်လို့အမှားမတွေ့ရင် AST အဖြစ်သိုလှောင်လိုက်တယ်။
   */
        const AST = parser.results[0];

        /*Parse လုပ်တာအောင်မြင်တဲ့အခါ "FileName.ast.json" ဖိုင်ထုတ်ပေးလိုက်တယ်။မထုတ်ခင် AST ကို JSON String အဖြစ်ပြောင်းလိုက်တယ်။*/
        fs.writeFile(`${fileName}.ast.json`,
            JSON.stringify(AST, null, 4),
            (err) => {
                /*Error ရှိအခါ Error တက်ပါမယ်။*/
                if (err) return console.log(err);

                /*File Create လို့အောင်မြင်ရင်အောင်မြင်ကြောင်း Message ပြန်ပေးပါမယ်။*/
                console.log("AST Created.");
            });

    } catch (e) {
        /*Syntax Error တွေ့ရင် Error ပြပေးမှာပါ။*/
        console.log(e.message);
    }
}
```

### Transpiler

Code Generation အတွက် Translator.js ဖိုင်ကိုအောက်ပါအတိုင်းရေးရပါမယ်။
Translator.js သည် JS Code ကိုထုတ်ပေးမှာဖြစ်ပါတယ်။

```js
const fs = require("fs");
// User ကထည့်ပေးမယ့်ဖိုင်ကိုယူပါမယ်။
const file = process.argv[2];
// ဖိုင်ရဲ့နာမည်လေးကိုခွဲထုတ်လိုက်တယ်။
const fileNameOnly = file.split(".")[0];

// AST ဖိုင်ကိုဖတ်ပါတယ်။
fs.readFile(file, (err, data) => {
    if (err) throw err; // handle the error

    // AST ဖိုင်ထဲက JSON ကို Array Object ပြန်ပြောင်းလိုက်ပါတယ်။ပြီးနောက်JS ကိုပြောင်းမယ့် Function ကို Data တွေပေးလိုက်တယ်။
    const JSCodes = transpileToJS(JSON.parse(data.toString()));

    // JS Code တွေကို JS ဖိုင်အဖြစ်ပြန်ထုတ်ပေးလိုက်ပါတယ်။
    fs.writeFile(`${fileNameOnly}.js`, JSCodes, err => {
        if (err) return console.log(err);

        console.log(`${fileNameOnly}.js Transpiled Successfully.`);
    });
})


const transpileToJS = data => {
    // JS Code ပြန်ထုတ်ပေးဖို့အတွက် ပထမဆုံး Arary အဖြစ်သတ်မှတ်ထားပါတယ်။
    let lines = [];
    // Data တွေကို Loop ပတ်ပါမယ်။
    for (statement of data) {
        // Expression တွေထွက်လာမှာဖြသ်တဲါအတွက် Expression Generator ကိုလွှဲပေးလိုက်တယ်။ပြီးမှ Return ပြန်တဲ့ ကောင်ကို Expression အဖြစ်သိမ်းလိုက်တယ်။
        let expression = generateExpression(statement);

        // Expression တွေကို JS ပြောင်းပြီး Lines Array ထဲထည့်လိုက်တယ်။
        lines.push(`console.log(${expression})`);
    }
    // Lines Array ထဲက Source Code အဖြစ်ထည့်လိုက်တဲ့ Array Element တွေကို တစ်ကြောင်းချင်းစီဖြစ်အောင်လုပ်ပေးပြီး Return ပြန်လိုက်တယ်။
    return lines.join("\n");
}


// Expression တွေကိုလက်ခံပါမယ်။
function generateExpression(expression) {
    // Expression က Object ဖြစ်မဖြစ်စစ်ပါတယ်။
    if (typeof expression === "object") {
        // Object ဖြစ်နေတဲ့အခါ Binary Expression လားလို့စစ်ပါတယ်။
        if (expression.type === "binary_expression") {
            // rop (Right Operand) က Expression ပြန်ဖြစ်နိုင်တဲ့အတွက် generateExpression ကိုပြန်ခေါ်ပေးလိုက်ပါတယ်။
            let right = generateExpression(expression.rop);
            // lop (Left Operand) က Expression ပြန်ဖြစ်နိုင်တဲ့အတွက် generateExpression ကိုပြန်ခေါ်ပေးလိုက်ပါတယ်။
            let left = generateExpression(expression.lop);

            // Operator က Operator ပဲမို့လို့ Operator တန်ဖို့းကိုပဲယူလိုက်ပါတယ်။
            let operator = expression.operator;

            // ပြီးနောက် Expression အဖြစ် Return ပြန်ပေးလိုက်ပါတယ်။
            return `${left} ${operator} ${right}`;
        }
    } else {
        // Object မဟုတ်ရင် ပေးထားတဲ့ကောင်ကိုပဲပြန် Return ပေးပါတယ်။
        return expression;
    }
}
```

## Usage

```bash
npm run parse # parse the grammer to generate parser
```

## Simple Program

```
1 + 2
2 + 3 + 8
```

## Generate AST

```bash
node parser.js example.calc 
```

## Transpile To JS

```bash
node translator.js example.calc.js.json
```

## Run JS

```bash
node example.js
```

## Conclusion

နိဂုံးချုပ်အနေနဲ့ Programming Language တစ်ခုအလုပ်လုပ်ပုံကိုသီအိုရီအရကော၊လက်တွေ့အရကောနားလည်သွားမယ်လို့မျှော်လင့်ပါတယ်။
နားမလည်သေးရင်လည်းထပ်လေ့လာပါ။အချိန်တော့ပေးရပါမယ်။
ကျွန်တော်ရေးထားတာကသီအိုရီအကျဉ်းချုပ်ဖြသ်လို့အကျယ်ကိုရှာဖတ်ပါ။ ကိုယ်ပိုင် Programming Language
တစ်ခုရေးပြီးသွားရင်လည်းကျွန်တောိ့ကိုလက်တို့လိုက်ပါအုံးနော်။
