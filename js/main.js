/* ============================================================
   CF克旗-文书生成工具测试 — 交互逻辑
   ============================================================ */

// ---------- 案件明细数据（15 条） ----------
// 列：案件编号 | 日期时间 | 选择案由 | 许可证号 | 企业名称 | 社会统一信用代码 | 法人姓名/涉案人员 | 性别 | 经营地址/案发地址
const CASE_DATA = [
  {
    caseNo: "", dateTime: "", cause: "未在当地烟草专卖批发企业进货",
    license: "", creditCode: "",
    company: "克什克腾旗宇宙地镇温馨家园便民超市",
    person: "孟祥宇", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧",
  },
  {
    caseNo: "", dateTime: "", cause: "销售非法生产的卷烟",
    license: "", creditCode: "",
    company: "克什克腾旗宇宙地镇温馨家园便民超市",
    person: "孟祥宇", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧",
  },
  {
    caseNo: "", dateTime: "", cause: "未在当地烟草专卖批发企业进货",
    license: "", creditCode: "",
    company: "克什克腾旗经棚镇永辉五金商店（个体工商户）",
    person: "谭利飞", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗经棚镇滨河路腾达商城楼下从南到北第八号大厅",
  },
  {
    caseNo: "", dateTime: "", cause: "未在当地烟草专卖批发企业进货",
    license: "", creditCode: "",
    company: "克什克腾旗土城子镇金有副食商店（个体工商户）",
    person: "付亚鑫", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗土城子镇天保同村天保同组25号",
  },
  {
    caseNo: "", dateTime: "", cause: "未在当地烟草专卖批发企业进货",
    license: "", creditCode: "",
    company: "万合永镇裕龙德商店",
    person: "刘相茹", gender: "女",
    address: "内蒙古自治区克什克腾旗万合永镇柳林村裕龙德（裕龙德组主电线杆03号北侧5米2间平房）",
  },
  {
    caseNo: "", dateTime: "", cause: "未在当地烟草专卖批发企业进货",
    license: "", creditCode: "",
    company: "万合永镇建成彩钢五金门市",
    person: "杜建成", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗万合永镇柳林村（门牌号110号）",
  },
  {
    caseNo: "", dateTime: "", cause: "未在当地烟草专卖批发企业进货",
    license: "", creditCode: "",
    company: "克什克腾旗盈聚百货零售商店（个体工商户）",
    person: "方秀花", gender: "女",
    address: "内蒙古自治区赤峰市克什克腾旗达日罕乌拉苏木大唐煤制气项目消防站西侧2号商铺",
  },
  {
    caseNo: "", dateTime: "", cause: "无证运输",
    license: "", creditCode: "",
    company: "克什克腾旗宇宙地镇温馨家园便民超市",
    person: "孟祥宇", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧",
  },
  {
    caseNo: "", dateTime: "", cause: "销售非法生产的卷烟",
    license: "", creditCode: "",
    company: "克什克腾旗经棚镇云鼎轩烟酒行（个体工商户）",
    person: "江雪", gender: "女",
    address: "内蒙古自治区赤峰市克什克腾旗经棚镇经十一街宝石B区421号厅",
  },
  {
    caseNo: "", dateTime: "", cause: "销售非法生产的卷烟",
    license: "", creditCode: "",
    company: "克什克腾旗宇宙地镇温馨家园便民超市",
    person: "孟祥宇", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧",
  },
  {
    caseNo: "", dateTime: "", cause: "销售非法生产的卷烟",
    license: "", creditCode: "",
    company: "克什克腾旗宇宙地镇温馨家园便民超市",
    person: "孟祥宇", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧",
  },
  {
    caseNo: "", dateTime: "", cause: "销售非法生产的卷烟",
    license: "", creditCode: "",
    company: "克什克腾旗芝瑞镇令娜烟酒商店（个体工商户）",
    person: "杨文娟", gender: "女",
    address: "内蒙古自治区赤峰市克什克腾旗芝瑞镇上柜村上柜组31号房屋",
  },
  {
    caseNo: "", dateTime: "", cause: "销售非法生产的卷烟",
    license: "", creditCode: "",
    company: "克什克腾旗土城子镇宋二蔬菜水果店（个体工商户）",
    person: "宋亚东", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗土城子镇安民街临街门面房15间房",
  },
  {
    caseNo: "", dateTime: "", cause: "销售非法生产的卷烟",
    license: "", creditCode: "",
    company: "克什克腾旗宇宙地镇温馨家园便民超市",
    person: "孟祥宇", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧",
  },
  {
    caseNo: "", dateTime: "", cause: "销售非法生产的卷烟",
    license: "", creditCode: "",
    company: "克什克腾旗经棚镇利之源名烟名酒城（个体工商户）",
    person: "杨素英", gender: "男",
    address: "内蒙古自治区赤峰市克什克腾旗经棚镇应昌路西拉木伦广场12号一层1号商铺",
  },
];

// 案由 -> 标签样式映射
const CAUSE_TAG = {
  "未在当地烟草专卖批发企业进货": "tag-buy",
  "销售非法生产的卷烟": "tag-sale",
  "无证运输": "tag-transport",
};

// ---------- 渲染表格 ----------
function renderTable() {
  const tbody = document.getElementById("table-body");
  const rows = CASE_DATA.map((c) => {
    const tagCls = CAUSE_TAG[c.cause] || "";
    const cell = (val) =>
      val ? `<td title="${escapeHtml(val)}">${escapeHtml(val)}</td>`
          : `<td class="cell-empty">-</td>`;
    return `<tr>
      ${cell(c.caseNo)}
      ${cell(c.dateTime)}
      <td><span class="case-tag ${tagCls}">${escapeHtml(c.cause)}</span></td>
      ${cell(c.license)}
      ${cell(c.company)}
      ${cell(c.creditCode)}
      ${cell(c.person)}
      ${cell(c.gender)}
      ${cell(c.address)}
    </tr>`;
  }).join("");
  tbody.innerHTML = rows;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------- 案件种类分布环形图 ----------
const DISTRIBUTION = [
  { name: "销售非法生产的卷烟", value: 8, color: "#3895e0" },
  { name: "未在当地烟草专卖批发企业进货", value: 6, color: "#15b6ac" },
  { name: "无证运输", value: 1, color: "#005297" },
];

function renderLegend() {
  const legend = document.getElementById("chart-legend");
  legend.innerHTML = DISTRIBUTION.map(
    (d) => `<span class="legend-item">
      <span class="legend-dot" style="background-color:${d.color};"></span>${d.name}
    </span>`
  ).join("");
}

function renderChart() {
  const el = document.getElementById("chart-distribution");
  const chart = echarts.init(el, null, { renderer: "canvas" });

  chart.setOption({
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      backgroundColor: "#29314c",
      borderColor: "rgba(255,255,255,0.12)",
      textStyle: { color: "rgba(255,255,255,0.92)", fontSize: 13 },
      formatter: "{b}: {c} 件 ({d}%)",
    },
    series: [
      {
        name: "案件种类分布",
        type: "pie",
        radius: ["52%", "74%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderColor: "#232842",
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: { show: false },
        },
        data: DISTRIBUTION.map((d) => ({
          name: d.name,
          value: d.value,
          itemStyle: { color: d.color },
        })),
      },
    ],
  });

  window.addEventListener("resize", () => chart.resize());
}

// ---------- 查看原始数据 ----------
function setupRawData() {
  const btn = document.getElementById("btn-raw");
  btn.addEventListener("click", () => {
    // 简单弹窗展示原始数据（JSON）
    const overlay = document.createElement("div");
    overlay.className = "raw-overlay";
    overlay.innerHTML = `<div class="raw-modal">
      <div class="raw-modal-header">
        <span>原始数据</span>
        <button class="raw-close">×</button>
      </div>
      <pre class="raw-content"></pre>
    </div>`;
    overlay.querySelector(".raw-content").textContent = JSON.stringify(
      CASE_DATA, null, 2
    );
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelector(".raw-close").addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
  });
}

// ---------- 菜单交互 ----------
function setupMenu() {
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".menu-item").forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      const title = item.querySelector(".menu-text");
      if (title) {
        document.querySelector(".header-title").textContent = title.textContent;
      }
    });
  });
}

// ---------- 初始化 ----------
document.addEventListener("DOMContentLoaded", () => {
  renderTable();
  renderLegend();
  renderChart();
  setupRawData();
  setupMenu();
});
