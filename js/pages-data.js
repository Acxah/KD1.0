/* ============================================================
   CF克旗-文书生成工具测试 — 页面定义数据 v2
   原版结构：菜单 → 全宽数据列表页；「添加」→ 表单弹窗
   view: list=数据列表页 | placeholder=占位 | home=仪表盘
   ============================================================ */
const PAGES = {
  "g1_xianchang": {
    "name": "1、现场笔录",
    "group": "未在当地烟草专卖批发企业进货",
    "view": "list",
    "columns": [
      "选择流水号",
      "案由",
      "检查开始时间",
      "检查结束时间",
      "零售户信息",
      "许可证号",
      "企业名称",
      "法人姓名",
      "法人性别",
      "法人身份证号",
      "法人联系电话",
      "法人身份证地址",
      "经营地址",
      "许可证有效期起",
      "许可证有效期止",
      "现场负责人是否为法人",
      "现场负责人",
      "现场负责人姓名",
      "现场负责人性别",
      "现场负责人身份证号",
      "现场负责人与被检查人关系",
      "现场负责人联系电话",
      "卷烟信息",
      "卷烟品规数量信息整合",
      "品规数量",
      "查获总数",
      "总价",
      "其他补充情况",
      "检查人",
      "执法人员信息汇总",
      "提交人",
      "提交时间",
      "更新时间",
      "性别",
      "身份证号",
      "联系电话",
      "身份证地址",
      "与被检查人关系",
      "流水号",
      "卷烟品规",
      "卷烟条码",
      "卷烟数量",
      "卷烟总价",
      "执法证号",
      "日期时间",
      "执法人员信息整合"
    ],
    "total": 14,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "选择流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "案由",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "检查开始时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "检查结束时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "separator",
          "label": "检查信息"
        },
        {
          "type": "subform",
          "label": "零售户信息",
          "required": false,
          "columns": [
            "许可证号",
            "企业名称",
            "法人姓名",
            "性别",
            "身份证号",
            "联系电话",
            "身份证地址",
            "经营地址",
            "许可证有效期起",
            "许可证有效期止"
          ]
        },
        {
          "type": "field",
          "label": "现场负责人是否为法人",
          "required": true,
          "control": "text"
        },
        {
          "type": "subform",
          "label": "现场负责人",
          "required": false,
          "columns": [
            "现场负责人姓名",
            "性别",
            "身份证号",
            "与被检查人关系",
            "联系电话"
          ]
        },
        {
          "type": "separator",
          "label": "卷烟信息"
        },
        {
          "type": "subform",
          "label": "卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "流水号",
            "卷烟品规",
            "卷烟条码",
            "卷烟数量",
            "卷烟总价",
            "卷烟品规数量信息整合"
          ]
        },
        {
          "type": "field",
          "label": "卷烟品规数量信息整合",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "品规数量",
          "required": true,
          "control": "number"
        },
        {
          "type": "field",
          "label": "查获总数",
          "required": true,
          "control": "number"
        },
        {
          "type": "field",
          "label": "总价",
          "required": true,
          "control": "number"
        },
        {
          "type": "separator",
          "label": "现场信息"
        },
        {
          "type": "field",
          "label": "其他补充情况",
          "required": false,
          "control": "textarea"
        },
        {
          "type": "separator",
          "label": "检查人"
        },
        {
          "type": "subform",
          "label": "检查人",
          "required": false,
          "columns": [
            "选择检查人员",
            "检查人",
            "执法证号",
            "日期时间",
            "执法人员信息整合"
          ]
        }
      ],
      "isFlow": false
    }
  },
  "g1_zhengju": {
    "name": "2、证据先行登记保存批准书",
    "group": "未在当地烟草专卖批发企业进货",
    "view": "list",
    "columns": ["流水号选择", "流水号", "当事人姓名", "卷烟信息", "品种规格", "单位", "数量", "卷烟总价", "分管领导", "审批意见", "提交人", "提交时间", "更新时间"],
    "total": 0,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "流水号选择",
          "required": false,
          "control": "link"
        },
        {
          "type": "field",
          "label": "流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "当事人姓名",
          "required": false,
          "control": "text"
        },
        {
          "type": "subform",
          "label": "卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "品种规格",
            "单位",
            "数量",
            "卷烟总价"
          ]
        },
        {
          "type": "separator",
          "label": "分管领导审批"
        },
        {
          "type": "field",
          "label": "分管领导",
          "required": true,
          "control": "member"
        }
      ],
      "isFlow": false
    }
  },
  "g1_fuzhi": {
    "name": "3、证据复制（提取）单",
    "group": "未在当地烟草专卖批发企业进货",
    "view": "list",
    "columns": [
      "流水号",
      "立案编号",
      "复制（提取）时间",
      "复制（提取）地点",
      "证据图片上传",
      "证据类型",
      "提交人",
      "提交时间",
      "更新时间"
    ],
    "total": 0,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "选择数据",
          "required": false,
          "control": "link"
        },
        {
          "type": "field",
          "label": "流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "立案编号",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "复制（提取）时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "复制（提取）地点",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "证据图片上传",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "证据类型",
          "required": true,
          "control": "text"
        }
      ],
      "isFlow": false
    }
  },
  "g1_tongzhi": {
    "name": "4、先行登记保存证据处理通知书",
    "group": "未在当地烟草专卖批发企业进货",
    "view": "list",
    "columns": [
      "流水号",
      "文件年份",
      "文件号",
      "法人姓名",
      "先行登记保存日期",
      "送达方式",
      "送达地点",
      "提交人",
      "提交时间",
      "更新时间"
    ],
    "total": 0,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "选择流水号",
          "required": false,
          "control": "link"
        },
        {
          "type": "field",
          "label": "流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "文件年份",
          "required": true,
          "control": "number"
        },
        {
          "type": "field",
          "label": "文件号",
          "required": true,
          "control": "number"
        },
        {
          "type": "field",
          "label": "法人姓名",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "先行登记保存日期",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "送达方式",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "送达地点",
          "required": true,
          "control": "text"
        }
      ],
      "isFlow": false
    }
  },
  "g1_chouyang": {
    "name": "5、抽样取证物品清单",
    "group": "未在当地烟草专卖批发企业进货",
    "view": "list",
    "columns": [
      "选择流水号",
      "立案编号",
      "零售户信息",
      "法人",
      "抽样地址",
      "抽样方法",
      "抽样起始时间",
      "抽样结束时间",
      "卷烟信息",
      "关联数据",
      "送达方式",
      "送达地点",
      "提交人",
      "提交时间",
      "更新时间",
      "许可证号",
      "企业名称",
      "法人姓名",
      "性别",
      "身份证号",
      "联系电话",
      "身份证地址",
      "经营地址",
      "卷烟条码",
      "卷烟品规",
      "卷烟数量",
      "抽样数量",
      "样品情况"
    ],
    "total": 6,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "选择流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "立案编号",
          "required": false,
          "control": "text"
        },
        {
          "type": "subform",
          "label": "零售户信息",
          "required": false,
          "columns": [
            "许可证号",
            "企业名称",
            "法人姓名",
            "性别",
            "身份证号",
            "联系电话",
            "身份证地址",
            "经营地址"
          ]
        },
        {
          "type": "field",
          "label": "抽样地址",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "抽样方法",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "抽样起始时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "抽样结束时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "subform",
          "label": "卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "卷烟条码",
            "卷烟品规",
            "卷烟数量",
            "抽样数量",
            "样品情况"
          ]
        },
        {
          "type": "separator",
          "label": "承办人"
        },
        {
          "type": "field",
          "label": "关联数据",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "送达方式",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "送达地点",
          "required": true,
          "control": "text"
        }
      ],
      "isFlow": false
    }
  },
  "g1_xunwen": {
    "name": "6、询问笔录",
    "group": "未在当地烟草专卖批发企业进货",
    "view": "list",
    "columns": [
      "询问起始时间",
      "询问结束时间",
      "流水号",
      "选择涉案户",
      "法人姓名",
      "企业名称",
      "社会统一信用代码",
      "性别",
      "民族",
      "年龄",
      "证件类型",
      "身份证号码",
      "身份证地址",
      "经营地址",
      "联系电话",
      "许可证号",
      "许可证起始日期",
      "许可证结束日期",
      "选择卷烟信息",
      "查获总数",
      "卷烟数据汇总",
      "提交人",
      "提交时间",
      "更新时间",
      "品规",
      "数量",
      "品规数量汇总"
    ],
    "total": 4,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "询问起始时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "询问结束时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "选择流水号",
          "required": false,
          "control": "link"
        },
        {
          "type": "field",
          "label": "流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "separator",
          "label": "涉案户信息"
        },
        {
          "type": "subform",
          "label": "选择涉案户",
          "required": false,
          "columns": [
            "选择数据",
            "流水号",
            "企业名称",
            "许可证号",
            "社会统一信用代码",
            "法人姓名",
            "性别",
            "民族",
            "年龄",
            "证件类型",
            "身份证号码",
            "身份证地址",
            "经营地址",
            "联系电话",
            "许可证起始日期",
            "许可证结束日期"
          ]
        },
        {
          "type": "separator",
          "label": "卷烟信息"
        },
        {
          "type": "subform",
          "label": "选择卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "品规",
            "数量",
            "品规数量汇总"
          ]
        }
      ],
      "isFlow": false
    }
  },
  "g1_lian": {
    "name": "7、立案报告",
    "group": "未在当地烟草专卖批发企业进货",
    "view": "list",
    "columns": [
      "流水号",
      "案由",
      "案件来源",
      "案发时间",
      "选择零售户",
      "企业名称",
      "许可证号",
      "法人姓名",
      "性别",
      "年龄",
      "经营场所",
      "民族",
      "电话",
      "证件类型",
      "证件号码",
      "住址",
      "卷烟信息",
      "数据汇总",
      "数量合计",
      "品种数量",
      "执法人员选择",
      "执法人员信息汇总",
      "专卖股长",
      "审核意见",
      "法规股长",
      "分管领导",
      "提交人",
      "提交时间",
      "更新时间",
      "流程状态",
      "当前节点",
      "当前负责人",
      "品规",
      "数量",
      "品规数量汇总",
      "执法人员姓名",
      "执法人员",
      "执法证号",
      "执法人员信息"
    ],
    "total": 4,
    "hasAdd": false,
    "form": {
      "sections": [
        {
          "type": "separator",
          "label": "案件信息"
        },
        {
          "type": "field",
          "label": "流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "案由",
          "required": true,
          "control": "select",
          "options": [
            "未在当地烟草专卖批发企业进货",
            "无烟草专卖品准运证运输烟草专卖品",
            "销售非法生产的卷烟"
          ]
        },
        {
          "type": "field",
          "label": "案件来源",
          "required": true,
          "control": "select",
          "options": [
            "举报",
            "巡查发现",
            "上级交办",
            "其他"
          ]
        },
        {
          "type": "field",
          "label": "案发时间",
          "required": true,
          "control": "date"
        },
        {
          "type": "field",
          "label": "选择零售户",
          "control": "link"
        },
        {
          "type": "field",
          "label": "企业名称",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "许可证号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "法人姓名",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "性别",
          "control": "radio",
          "options": [
            "男",
            "女"
          ]
        },
        {
          "type": "field",
          "label": "年龄",
          "control": "number"
        },
        {
          "type": "field",
          "label": "民族",
          "control": "text"
        },
        {
          "type": "field",
          "label": "电话",
          "control": "text"
        },
        {
          "type": "field",
          "label": "经营场所",
          "control": "text"
        },
        {
          "type": "field",
          "label": "证件类型",
          "control": "select",
          "options": [
            "身份证",
            "其他"
          ]
        },
        {
          "type": "field",
          "label": "证件号码",
          "control": "text"
        },
        {
          "type": "field",
          "label": "住址",
          "control": "textarea"
        },
        {
          "type": "separator",
          "label": "卷烟信息"
        },
        {
          "type": "subform",
          "label": "卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "品规",
            "数量"
          ]
        },
        {
          "type": "field",
          "label": "数量合计",
          "control": "number"
        },
        {
          "type": "field",
          "label": "品种数量",
          "control": "number"
        },
        {
          "type": "separator",
          "label": "执法人员"
        },
        {
          "type": "subform",
          "label": "执法人员",
          "required": false,
          "columns": [
            "选择执法人员",
            "执法人员姓名",
            "执法证号"
          ]
        },
        {
          "type": "separator",
          "label": "审批流程"
        },
        {
          "type": "field",
          "label": "专卖股长",
          "control": "member"
        },
        {
          "type": "field",
          "label": "审核意见",
          "control": "textarea"
        },
        {
          "type": "field",
          "label": "法规股长",
          "control": "member"
        },
        {
          "type": "field",
          "label": "审核意见",
          "control": "textarea"
        },
        {
          "type": "field",
          "label": "分管领导",
          "control": "member"
        },
        {
          "type": "field",
          "label": "审核意见",
          "control": "textarea"
        }
      ],
      "isFlow": true
    }
  },
  "g1_liangjian": {
    "name": "8-9、鉴别检验留样告知书/涉案物品核价表",
    "group": "未在当地烟草专卖批发企业进货",
    "view": "list",
    "columns": [
      "选择流水号",
      "法人姓名",
      "卷烟信息",
      "损耗合计数量",
      "品规数量",
      "卷烟总数",
      "卷烟总价",
      "送达方式",
      "送达地点",
      "提交人",
      "提交时间",
      "更新时间",
      "卷烟条码",
      "卷烟品规",
      "单位",
      "涉案物品单价",
      "卷烟数量",
      "总价",
      "损耗数量"
    ],
    "total": 1,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "选择流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "法人姓名",
          "required": true,
          "control": "text"
        },
        {
          "type": "subform",
          "label": "卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "卷烟条码",
            "卷烟品规",
            "单位",
            "涉案物品单价",
            "卷烟数量",
            "总价",
            "损耗数量"
          ]
        },
        {
          "type": "field",
          "label": "损耗合计数量",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "品规数量",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "卷烟总数",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "卷烟总价",
          "required": false,
          "control": "text"
        },
        {
          "type": "separator",
          "label": "承办人"
        },
        {
          "type": "field",
          "label": "送达方式",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "送达地点",
          "required": true,
          "control": "text"
        }
      ],
      "isFlow": false
    }
  },
  "g1_zhongjie": {
    "name": "10-12、案件调查终结报告/案件处理初审表/听证告知书",
    "group": "未在当地烟草专卖批发企业进货",
    "view": "list",
    "columns": [
      "选择流水号",
      "案由",
      "案发时间",
      "立案时间",
      "案件来源",
      "零售户信息",
      "许可证号",
      "企业名称",
      "法人姓名",
      "法人性别",
      "法人身份证号",
      "民族",
      "法人联系电话",
      "法人身份证地址",
      "经营地址",
      "许可证有效期起",
      "许可证有效期止",
      "现场负责人是否为法人",
      "现场负责人",
      "现场负责人姓名",
      "现场负责人性别",
      "现场负责人身份证号",
      "现场负责人与被检查人关系",
      "现场负责人联系电话",
      "卷烟信息",
      "卷烟品规数量信息整合",
      "品规数量",
      "查获总数",
      "总价",
      "处罚依据",
      "处罚金额",
      "其他补充情况",
      "提交人",
      "提交时间",
      "更新时间",
      "性别",
      "身份证号",
      "联系电话",
      "身份证地址",
      "与被检查人关系",
      "流水号",
      "卷烟品规",
      "卷烟条码",
      "卷烟数量",
      "卷烟总价",
      "违反条款",
      "违反依据",
      "涉案物品总价",
      "处罚比例范围",
      "处罚比例"
    ],
    "total": 1,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "选择流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "案由",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "案发时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "立案时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "案件来源",
          "required": true,
          "control": "text"
        },
        {
          "type": "separator",
          "label": "检查信息"
        },
        {
          "type": "subform",
          "label": "零售户信息",
          "required": false,
          "columns": [
            "许可证号",
            "企业名称",
            "法人姓名",
            "性别",
            "民族",
            "身份证号",
            "联系电话",
            "身份证地址",
            "经营地址",
            "许可证有效期起",
            "许可证有效期止"
          ]
        },
        {
          "type": "field",
          "label": "民族",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "现场负责人是否为法人",
          "required": true,
          "control": "text"
        },
        {
          "type": "subform",
          "label": "现场负责人",
          "required": false,
          "columns": [
            "现场负责人姓名",
            "性别",
            "身份证号",
            "与被检查人关系",
            "联系电话"
          ]
        },
        {
          "type": "separator",
          "label": "卷烟信息"
        },
        {
          "type": "subform",
          "label": "卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "流水号",
            "卷烟品规",
            "卷烟条码",
            "卷烟数量",
            "卷烟总价",
            "卷烟品规数量信息整合"
          ]
        },
        {
          "type": "field",
          "label": "卷烟品规数量信息整合",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "品规数量",
          "required": true,
          "control": "number"
        },
        {
          "type": "field",
          "label": "查获总数",
          "required": true,
          "control": "number"
        },
        {
          "type": "field",
          "label": "总价",
          "required": true,
          "control": "number"
        },
        {
          "type": "subform",
          "label": "处罚依据",
          "required": true,
          "columns": [
            "案由",
            "违反条款",
            "违反依据",
            "处罚依据",
            "涉案物品总价",
            "处罚比例范围",
            "处罚比例"
          ]
        },
        {
          "type": "field",
          "label": "处罚金额",
          "required": true,
          "control": "number"
        },
        {
          "type": "separator",
          "label": "现场信息"
        },
        {
          "type": "field",
          "label": "其他补充情况",
          "required": false,
          "control": "textarea"
        }
      ],
      "isFlow": false
    }
  },
  "g2_xianchang": {
    "name": "1、现场笔录",
    "group": "无烟草专卖品准运证运输烟草专卖品",
    "view": "list",
    "columns": [
      "选择流水号",
      "案由",
      "检查开始时间",
      "检查结束时间",
      "零售户信息",
      "涉案人员姓名",
      "性别",
      "身份证号",
      "联系电话",
      "身份证地址",
      "案发地址",
      "卷烟信息",
      "卷烟品规数量信息整合",
      "品规数量",
      "查获总数",
      "总价",
      "其他补充情况",
      "检查人",
      "执法人员信息汇总",
      "提交人",
      "提交时间",
      "更新时间",
      "流水号",
      "卷烟条码",
      "卷烟品规",
      "卷烟单价",
      "卷烟数量",
      "卷烟总价",
      "执法证号",
      "日期时间",
      "执法人员信息整合"
    ],
    "total": 0,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "选择流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "案由",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "检查开始时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "检查结束时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "separator",
          "label": "检查信息"
        },
        {
          "type": "subform",
          "label": "零售户信息",
          "required": false,
          "columns": [
            "涉案人员姓名",
            "性别",
            "身份证号",
            "联系电话",
            "身份证地址",
            "案发地址"
          ]
        },
        {
          "type": "separator",
          "label": "卷烟信息"
        },
        {
          "type": "subform",
          "label": "卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "流水号",
            "卷烟条码",
            "卷烟品规",
            "卷烟单价",
            "卷烟数量",
            "卷烟总价",
            "卷烟品规数量信息整合"
          ]
        },
        {
          "type": "field",
          "label": "品规数量",
          "required": true,
          "control": "number"
        },
        {
          "type": "field",
          "label": "查获总数",
          "required": true,
          "control": "number"
        },
        {
          "type": "field",
          "label": "总价",
          "required": true,
          "control": "number"
        },
        {
          "type": "separator",
          "label": "现场信息"
        },
        {
          "type": "field",
          "label": "其他补充情况",
          "required": false,
          "control": "textarea"
        },
        {
          "type": "separator",
          "label": "检查人"
        },
        {
          "type": "subform",
          "label": "检查人",
          "required": false,
          "columns": [
            "选择检查人员",
            "检查人",
            "执法证号",
            "日期时间",
            "执法人员信息整合"
          ]
        }
      ],
      "isFlow": false
    }
  },
  "g2_zhengju": {
    "name": "2、证据先行登记保存批准书",
    "group": "无烟草专卖品准运证运输烟草专卖品",
    "view": "list",
    "columns": [
      "流水号",
      "当事人姓名",
      "卷烟信息",
      "品种数量",
      "总数",
      "分管领导",
      "审批意见",
      "提交人",
      "提交时间",
      "更新时间",
      "流程状态",
      "当前节点",
      "当前负责人",
      "品种规格",
      "单位",
      "卷烟单价",
      "数量"
    ],
    "total": 0,
    "hasAdd": false,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "当事人姓名",
          "required": true,
          "control": "text"
        },
        {
          "type": "subform",
          "label": "卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "品种规格",
            "单位",
            "卷烟单价",
            "数量"
          ]
        },
        {
          "type": "field",
          "label": "品种数量",
          "control": "number"
        },
        {
          "type": "field",
          "label": "总数",
          "control": "number"
        },
        {
          "type": "separator",
          "label": "分管领导审批"
        },
        {
          "type": "field",
          "label": "分管领导",
          "required": true,
          "control": "member"
        },
        {
          "type": "field",
          "label": "审批意见",
          "control": "textarea"
        }
      ],
      "isFlow": true
    }
  },
  "g2_fuzhi": {
    "name": "3、证据复制（提取）单",
    "group": "无烟草专卖品准运证运输烟草专卖品",
    "view": "list",
    "columns": [
      "流水号",
      "复制（提取）时间",
      "复制（提取）地点",
      "证据图片上传",
      "证据类型",
      "提交人",
      "提交时间",
      "更新时间"
    ],
    "total": 0,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "选择数据",
          "required": false,
          "control": "link"
        },
        {
          "type": "field",
          "label": "流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "复制（提取）时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "复制（提取）地点",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "证据图片上传",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "证据类型",
          "required": true,
          "control": "text"
        }
      ],
      "isFlow": false
    }
  },
  "g2_tongzhi": {
    "name": "4、先行登记保存证据处理通知书",
    "group": "无烟草专卖品准运证运输烟草专卖品",
    "view": "list",
    "columns": [
      "流水号",
      "文件年份",
      "文件号",
      "法人姓名",
      "先行登记保存日期",
      "送达方式",
      "送达地点",
      "提交人",
      "提交时间",
      "更新时间"
    ],
    "total": 0,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "选择流水号",
          "required": false,
          "control": "link"
        },
        {
          "type": "field",
          "label": "流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "文件年份",
          "required": true,
          "control": "number"
        },
        {
          "type": "field",
          "label": "文件号",
          "required": true,
          "control": "number"
        },
        {
          "type": "field",
          "label": "法人姓名",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "先行登记保存日期",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "送达方式",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "送达地点",
          "required": true,
          "control": "text"
        }
      ],
      "isFlow": false
    }
  },
  "g2_chouyang": {
    "name": "5、抽样取证物品清单",
    "group": "无烟草专卖品准运证运输烟草专卖品",
    "view": "list",
    "columns": [
      "选择流水号",
      "零售户信息",
      "法人",
      "抽样地址",
      "抽样方法",
      "抽样起始时间",
      "抽样结束时间",
      "卷烟信息",
      "送达方式",
      "送达地点",
      "提交人",
      "提交时间",
      "更新时间",
      "许可证号",
      "企业名称",
      "法人姓名",
      "性别",
      "身份证号",
      "联系电话",
      "身份证地址",
      "经营地址",
      "卷烟条码",
      "卷烟品规",
      "卷烟数量",
      "抽样数量",
      "样品情况"
    ],
    "total": 0,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "选择流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "subform",
          "label": "零售户信息",
          "required": false,
          "columns": [
            "许可证号",
            "企业名称",
            "法人姓名",
            "性别",
            "身份证号",
            "联系电话",
            "身份证地址",
            "经营地址"
          ]
        },
        {
          "type": "field",
          "label": "抽样地址",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "抽样方法",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "抽样起始时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "抽样结束时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "subform",
          "label": "卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "卷烟条码",
            "卷烟品规",
            "卷烟数量",
            "抽样数量",
            "样品情况"
          ]
        },
        {
          "type": "separator",
          "label": "承办人"
        },
        {
          "type": "field",
          "label": "送达方式",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "送达地点",
          "required": true,
          "control": "text"
        }
      ],
      "isFlow": false
    }
  },
  "g2_xunwen": {
    "name": "6、询问笔录",
    "group": "无烟草专卖品准运证运输烟草专卖品",
    "view": "list",
    "columns": [
      "询问起始时间",
      "询问结束时间",
      "流水号",
      "选择涉案户",
      "法人姓名",
      "企业名称",
      "社会统一信用代码",
      "性别",
      "民族",
      "年龄",
      "证件类型",
      "身份证号码",
      "身份证地址",
      "经营地址",
      "联系电话",
      "许可证号",
      "许可证起始日期",
      "许可证结束日期",
      "选择卷烟信息",
      "查获总数",
      "卷烟数据汇总",
      "提交人",
      "提交时间",
      "更新时间",
      "品规",
      "数量",
      "品规数量汇总"
    ],
    "total": 5,
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "询问起始时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "询问结束时间",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "选择流水号",
          "required": false,
          "control": "link"
        },
        {
          "type": "field",
          "label": "流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "separator",
          "label": "涉案户信息"
        },
        {
          "type": "subform",
          "label": "选择涉案户",
          "required": false,
          "columns": [
            "选择数据",
            "流水号",
            "企业名称",
            "许可证号",
            "社会统一信用代码",
            "法人姓名",
            "性别",
            "民族",
            "年龄",
            "证件类型",
            "身份证号码",
            "身份证地址",
            "经营地址",
            "联系电话",
            "许可证起始日期",
            "许可证结束日期"
          ]
        },
        {
          "type": "separator",
          "label": "卷烟信息"
        },
        {
          "type": "subform",
          "label": "选择卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "品规",
            "数量",
            "品规数量汇总"
          ]
        }
      ],
      "isFlow": false
    }
  },
  "g2_lian": {
    "name": "7、立案报告",
    "group": "无烟草专卖品准运证运输烟草专卖品",
    "view": "list",
    "columns": [
      "流水号",
      "案由",
      "案件来源",
      "案发时间",
      "涉案人员信息",
      "当事人姓名",
      "性别",
      "年龄",
      "民族",
      "电话",
      "证件类型",
      "证件号码",
      "住址",
      "案发地址",
      "卷烟信息",
      "数据汇总",
      "数量合计",
      "品种数量",
      "执法人员选择",
      "执法人员信息汇总",
      "专卖股长",
      "审核意见",
      "法规股长",
      "分管领导",
      "提交人",
      "提交时间",
      "更新时间",
      "流程状态",
      "当前节点",
      "当前负责人",
      "品规",
      "数量",
      "品规数量汇总",
      "执法人员姓名",
      "执法人员",
      "执法证号",
      "执法人员信息"
    ],
    "total": 1,
    "hasAdd": false,
    "form": {
      "sections": [
        {
          "type": "separator",
          "label": "案件信息"
        },
        {
          "type": "field",
          "label": "流水号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "案由",
          "required": true,
          "control": "select",
          "options": [
            "未在当地烟草专卖批发企业进货",
            "无烟草专卖品准运证运输烟草专卖品",
            "销售非法生产的卷烟"
          ]
        },
        {
          "type": "field",
          "label": "案件来源",
          "required": true,
          "control": "select",
          "options": [
            "举报",
            "巡查发现",
            "上级交办",
            "其他"
          ]
        },
        {
          "type": "field",
          "label": "案发时间",
          "required": true,
          "control": "date"
        },
        {
          "type": "field",
          "label": "选择零售户",
          "control": "link"
        },
        {
          "type": "field",
          "label": "企业名称",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "许可证号",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "法人姓名",
          "required": true,
          "control": "text"
        },
        {
          "type": "field",
          "label": "性别",
          "control": "radio",
          "options": [
            "男",
            "女"
          ]
        },
        {
          "type": "field",
          "label": "年龄",
          "control": "number"
        },
        {
          "type": "field",
          "label": "民族",
          "control": "text"
        },
        {
          "type": "field",
          "label": "电话",
          "control": "text"
        },
        {
          "type": "field",
          "label": "经营场所",
          "control": "text"
        },
        {
          "type": "field",
          "label": "证件类型",
          "control": "select",
          "options": [
            "身份证",
            "其他"
          ]
        },
        {
          "type": "field",
          "label": "证件号码",
          "control": "text"
        },
        {
          "type": "field",
          "label": "住址",
          "control": "textarea"
        },
        {
          "type": "separator",
          "label": "卷烟信息"
        },
        {
          "type": "subform",
          "label": "卷烟信息",
          "required": false,
          "columns": [
            "选择数据",
            "品规",
            "数量"
          ]
        },
        {
          "type": "field",
          "label": "数量合计",
          "control": "number"
        },
        {
          "type": "field",
          "label": "品种数量",
          "control": "number"
        },
        {
          "type": "separator",
          "label": "执法人员"
        },
        {
          "type": "subform",
          "label": "执法人员",
          "required": false,
          "columns": [
            "选择执法人员",
            "执法人员姓名",
            "执法证号"
          ]
        },
        {
          "type": "separator",
          "label": "审批流程"
        },
        {
          "type": "field",
          "label": "专卖股长",
          "control": "member"
        },
        {
          "type": "field",
          "label": "审核意见",
          "control": "textarea"
        },
        {
          "type": "field",
          "label": "法规股长",
          "control": "member"
        },
        {
          "type": "field",
          "label": "审核意见",
          "control": "textarea"
        },
        {
          "type": "field",
          "label": "分管领导",
          "control": "member"
        },
        {
          "type": "field",
          "label": "审核意见",
          "control": "textarea"
        }
      ],
      "isFlow": true
    }
  },
  "b_renyuan": {
    "name": "执法人员库",
    "group": "基础数据",
    "view": "list",
    "columns": [
      "单位",
      "执法人员",
      "执法证号",
      "提交人",
      "提交时间",
      "更新时间"
    ],
    "total": "6",
    "hasAdd": true,
    "form": {
      "sections": [
        {
          "type": "field",
          "label": "单位",
          "required": false,
          "control": "text"
        },
        {
          "type": "field",
          "label": "执法人员",
          "required": false,
          "control": "member"
        },
        {
          "type": "field",
          "label": "执法证号",
          "required": false,
          "control": "number"
        }
      ],
      "isFlow": false
    }
  },
  "b_juanji": {
    "name": "卷烟信息",
    "group": "基础数据",
    "view": "list",
    "columns": [
      "规格编码",
      "卷烟品规",
      "品牌",
      "国家局统一编码",
      "件码",
      "卷烟条码",
      "盒码",
      "卷烟零售价",
      "提交人",
      "提交时间",
      "更新时间"
    ],
    "total": "1525",
    "hasAdd": false
  },
  "b_fagui": {
    "name": "法规数据库",
    "group": "基础数据",
    "view": "list",
    "columns": [
      "案由简称",
      "案由全称",
      "违反条款",
      "违反依据",
      "处罚依据",
      "涉案物品价值/数量",
      "处罚比例范围(%)",
      "处罚比例(默认)(%)"
    ],
    "total": "20",
    "hasAdd": false
  },
  "flow_todo": {
  "name": "我的待办",
  "group": "流程",
  "view": "flow",
  "tabs": [
    "全部（0）",
    "已超时",
    "催办",
    "委托",
    "回退",
    "暂存"
  ],
  "emptyText": "暂无待办任务"
},
  "flow_create": {
  "name": "我发起的",
  "group": "流程",
  "view": "flow",
  "tabs": [
    "全部（0）",
    "进行中",
    "已结束"
  ],
  "emptyText": "暂无发起记录"
},
  "flow_handled": {
  "name": "我处理的",
  "group": "流程",
  "view": "flow",
  "tabs": [
    "全部（0）",
    "已处理"
  ],
  "emptyText": "暂无处理记录"
},
  "flow_cc": {
  "name": "抄送我的",
  "group": "流程",
  "view": "flow",
  "tabs": [
    "全部（0）"
  ],
  "emptyText": "暂无抄送记录"
},
  "entry_base": {
  "name": "基础数据录入",
  "group": "案件数据",
  "view": "list",
  "columns": [
    "流水号",
    "日期时间",
    "案件编号",
    "立案编号",
    "选择案由",
    "许可证号",
    "企业名称",
    "社会统一信用代码",
    "法人姓名/涉案人员",
    "性别",
    "民族",
    "身份证号码",
    "联系电话",
    "身份证地址",
    "经营地址/案发地址",
    "许可证起始日期",
    "许可证结束日期",
    "执法人员",
    "提交人",
    "提交时间",
    "更新时间"
  ],
  "total": 15,
  "hasAdd": true,
  "form": {
    "sections": [
      {
        "type": "field",
        "label": "流水号",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "日期时间",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "案件编号",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "立案编号",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "选择案由",
        "required": true,
        "control": "text"
      },
      {
        "type": "field",
        "label": "选择数据",
        "required": false,
        "control": "link"
      },
      {
        "type": "field",
        "label": "许可证号",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "企业名称",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "社会统一信用代码",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "法人姓名/涉案人员",
        "required": true,
        "control": "text"
      },
      {
        "type": "field",
        "label": "性别",
        "required": true,
        "control": "text"
      },
      {
        "type": "field",
        "label": "民族",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "身份证号码",
        "required": true,
        "control": "text"
      },
      {
        "type": "field",
        "label": "联系电话",
        "required": true,
        "control": "text"
      },
      {
        "type": "field",
        "label": "身份证地址",
        "required": true,
        "control": "text"
      },
      {
        "type": "field",
        "label": "经营地址/案发地址",
        "required": true,
        "control": "text"
      },
      {
        "type": "field",
        "label": "许可证起始日期",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "许可证结束日期",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "执法人员",
        "required": false,
        "control": "text"
      }
    ],
    "isFlow": false
  }
},
  "entry_cig": {
  "name": "卷烟信息录入",
  "group": "卷烟数据",
  "view": "list",
  "columns": [
    "录入日期",
    "录入人员",
    "流水号",
    "案由",
    "录入卷烟数据",
    "提交人",
    "提交时间",
    "更新时间",
    "卷烟条码",
    "卷烟品规",
    "单位",
    "卷烟零售价",
    "数量"
  ],
  "total": 9,
  "hasAdd": true,
  "form": {
    "sections": [
      {
        "type": "field",
        "label": "录入日期",
        "required": false,
        "control": "text"
      },
      {
        "type": "field",
        "label": "录入人员",
        "required": false,
        "control": "member"
      },
      {
        "type": "field",
        "label": "选择流水号",
        "required": false,
        "control": "link"
      },
      {
        "type": "field",
        "label": "流水号",
        "required": true,
        "control": "text"
      },
      {
        "type": "field",
        "label": "案由",
        "required": false,
        "control": "text"
      },
      {
        "type": "subform",
        "label": "录入卷烟数据",
        "required": false,
        "columns": [
          "流水号",
          "卷烟条码",
          "卷烟品规",
          "单位",
          "卷烟零售价",
          "数量"
        ]
      }
    ],
    "isFlow": false
  }
}
};
if (typeof window !== 'undefined') window.PAGES = PAGES;