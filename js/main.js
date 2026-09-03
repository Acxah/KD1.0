/* ============================================================
   CF克旗-文书生成工具测试 — 前端交互 v2
   结构复刻原版：菜单 → 全宽数据列表页；「添加」→ 780px 表单弹窗
   ============================================================ */

/* ---------- 案件明细数据（首页仪表盘表格） ---------- */
const CASE_DATA = [
  { caseNo: "123", dateTime: "2026-08-20", cause: "未在当地烟草专卖批发企业进货", license: "150425101056", creditCode: "92150425MA0QTX105Q", company: "克什克腾旗宇宙地镇温馨家园便民超市", person: "孟祥宇", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧" },
  { caseNo: "9", dateTime: "2026-08-13", cause: "销售非法生产的卷烟", license: "150425101056", creditCode: "92150425MA0QTX105Q", company: "克什克腾旗宇宙地镇温馨家园便民超市", person: "孟祥宇", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧" },
  { caseNo: "8", dateTime: "2026-06-28", cause: "未在当地烟草专卖批发企业进货", license: "150425101059", creditCode: "92150425MA0P1FWD69", company: "克什克腾旗经棚镇永辉五金商店（个体工商户）", person: "谭利飞", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗经棚镇滨河路腾达商城楼下从南到北第八号大厅" },
  { caseNo: "6", dateTime: "2026-06-28", cause: "未在当地烟草专卖批发企业进货", license: "150425101046", creditCode: "92150425MAEC497Q7N", company: "克什克腾旗土城子镇金有副食商店（个体工商户）", person: "付亚鑫", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗土城子镇天保同村天保同组25号" },
  { caseNo: "5", dateTime: "2026-06-28", cause: "未在当地烟草专卖批发企业进货", license: "150425100581", creditCode: "92150425MA0NMA4L20", company: "万合永镇裕龙德商店", person: "刘相茹", gender: "女", address: "内蒙古自治区克什克腾旗万合永镇柳林村裕龙德（裕龙德组主电线杆03号北侧5米2间平房）" },
  { caseNo: "4", dateTime: "2026-06-28", cause: "未在当地烟草专卖批发企业进货", license: "150425100408", creditCode: "92150425MA0N3P838A", company: "万合永镇建成彩钢五金门市", person: "杜建成", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗万合永镇柳林村（门牌号110号）" },
  { caseNo: "2", dateTime: "2026-06-27", cause: "未在当地烟草专卖批发企业进货", license: "150425101053", creditCode: "92150425MAE6524D2G", company: "克什克腾旗盈聚百货零售商店（个体工商户）", person: "方秀花", gender: "女", address: "内蒙古自治区赤峰市克什克腾旗达日罕乌拉苏木大唐煤制气项目消防站西侧2号商铺" },
  { caseNo: "1", dateTime: "2026-06-26", cause: "无证运输", license: "150425101056", creditCode: "92150425MA0QTX105Q", company: "克什克腾旗宇宙地镇温馨家园便民超市", person: "孟祥宇", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧" },
  { caseNo: "", dateTime: "2026-06-25", cause: "销售非法生产的卷烟", license: "150425101048", creditCode: "92150425MAK9J4YTXY", company: "克什克腾旗经棚镇云鼎轩烟酒行（个体工商户）", person: "江雪", gender: "女", address: "内蒙古自治区赤峰市克什克腾旗经棚镇经十一街宝石B区421号厅" },
  { caseNo: "", dateTime: "2026-06-24", cause: "销售非法生产的卷烟", license: "150425101056", creditCode: "92150425MA0QTX105Q", company: "克什克腾旗宇宙地镇温馨家园便民超市", person: "孟祥宇", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧" },
  { caseNo: "", dateTime: "2026-06-23", cause: "销售非法生产的卷烟", license: "150425101056", creditCode: "92150425MA0QTX105Q", company: "克什克腾旗宇宙地镇温馨家园便民超市", person: "孟祥宇", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧" },
  { caseNo: "", dateTime: "2026-06-18", cause: "销售非法生产的卷烟", license: "150425101047", creditCode: "92150425MAK0X08H39", company: "克什克腾旗芝瑞镇令娜烟酒商店（个体工商户）", person: "杨文娟", gender: "女", address: "内蒙古自治区赤峰市克什克腾旗芝瑞镇上柜村上柜组31号房屋" },
  { caseNo: "", dateTime: "2026-06-17", cause: "销售非法生产的卷烟", license: "150425101051", creditCode: "", company: "克什克腾旗土城子镇宋二蔬菜水果店（个体工商户）", person: "宋亚东", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗土城子镇安民街临街门面房15间房" },
  { caseNo: "", dateTime: "2026-06-17", cause: "销售非法生产的卷烟", license: "150425101056", creditCode: "", company: "克什克腾旗宇宙地镇温馨家园便民超市", person: "孟祥宇", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗宇宙地镇很黑村天和永组303线公路北侧" },
  { caseNo: "", dateTime: "2026-06-10", cause: "销售非法生产的卷烟", license: "150425101041", creditCode: "", company: "克什克腾旗经棚镇利之源名烟名酒城（个体工商户）", person: "杨素英", gender: "男", address: "内蒙古自治区赤峰市克什克腾旗经棚镇应昌路西拉木伦广场12号一层1号商铺" },
];

const CAUSE_TAG = {
  "未在当地烟草专卖批发企业进货": "tag-buy",
  "销售非法生产的卷烟": "tag-sale",
  "无证运输": "tag-transport",
};

/* ============ 工具 ============ */
function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escAttr(s) {
  return escapeHtml(s).replace(/'/g, "&#39;");
}

/* ============ 首页仪表盘 ============ */
function renderTable() {
  const tbody = document.getElementById("table-body");
  if (!tbody) return;
  tbody.innerHTML = CASE_DATA.map((c) => {
    const tagCls = CAUSE_TAG[c.cause] || "";
    const cell = (val) => val ? `<td title="${escAttr(val)}">${escapeHtml(val)}</td>` : `<td class="cell-empty">-</td>`;
    return `<tr>${cell(c.caseNo)}${cell(c.dateTime)}
      <td><span class="case-tag ${tagCls}">${escapeHtml(c.cause)}</span></td>
      ${cell(c.license)}${cell(c.company)}${cell(c.creditCode)}${cell(c.person)}${cell(c.gender)}${cell(c.address)}</tr>`;
  }).join("");
}

const DISTRIBUTION = [
  { name: "销售非法生产的卷烟", value: 8, color: "#3895e0" },
  { name: "未在当地烟草专卖批发企业进货", value: 6, color: "#15b6ac" },
  { name: "无证运输", value: 1, color: "#005297" },
];

function renderLegend() {
  const legend = document.getElementById("chart-legend");
  if (!legend) return;
  legend.innerHTML = DISTRIBUTION.map((d) =>
    `<span class="legend-item"><span class="legend-dot" style="background-color:${d.color};"></span>${d.name}</span>`
  ).join("");
}

function renderChart() {
  const el = document.getElementById("chart-distribution");
  if (!el || typeof echarts === "undefined") return;
  const chart = echarts.init(el);
  chart.setOption({
    backgroundColor: "transparent",
    tooltip: { trigger: "item", backgroundColor: "#29314c", borderColor: "rgba(255,255,255,0.12)", textStyle: { color: "rgba(255,255,255,0.92)", fontSize: 13 }, formatter: "{b}: {c} 件 ({d}%)" },
    series: [{ name: "案件种类分布", type: "pie", radius: ["52%", "74%"], center: ["50%", "50%"],
      itemStyle: { borderColor: "rgba(255,255,255,0.15)", borderWidth: 1 },
      label: { show: false }, emphasis: { label: { show: false } },
      data: DISTRIBUTION.map((d) => ({ name: d.name, value: d.value, itemStyle: { color: d.color } })) }],
  });
  window.addEventListener("resize", () => chart.resize());
}

/* ============ 列表页渲染（原版：全宽数据列表） ============ */

function listModeText(def) {
  const n = def.name || "";
  if (/立案报告/.test(n)) return "管理全部流程";
  if (/法规数据库/.test(n)) return "法律法规数据库";
  return def.hasAdd ? "管理全部数据" : "查看全部数据";
}

function renderListView(def) {
  const heads = (def.columns || []).map((c) => `<th>${escapeHtml(c)}</th>`).join("");
  const tools = [];
  if (def.hasAdd) tools.push('<button type="button" class="lp-add">+ 添加</button>');
  tools.push('<button type="button" class="lp-btn">导出</button>');
  tools.push('<button type="button" class="lp-btn">删除</button>');
  tools.push('<button type="button" class="lp-btn">操作记录</button>');
  tools.push('<button type="button" class="lp-btn">筛选</button>');
  const total = def.total || 0;
  const emptyHint = total > 0
    ? `共 ${total} 条数据（演示版仅展示结构，数据请在原系统查看）`
    : "暂无数据（演示版）";
  return `<div class="list-page">
    <div class="list-head">
      <span class="list-mode">${escapeHtml(listModeText(def))}</span>
      <div class="list-tools">${tools.join("")}</div>
    </div>
    <div class="list-scroll">
      <table class="list-table">
        <thead><tr>${heads}</tr></thead>
        <tbody><tr><td colspan="${(def.columns || []).length || 1}" class="cell-empty lp-empty">${emptyHint}</td></tr></tbody>
      </table>
    </div>
    <div class="pagination lp-foot">
      <span class="page-size">20 条/页</span>
      <span class="page-total">共 ${total} 条</span>
      <span class="page-nav">‹ 1 / 1 ›</span>
    </div>
  </div>`;
}

/* ============ 表单弹窗（原版：添加 → 780px 白色模态） ============ */

function controlHtml(f, idx) {
  const options = (f.options || []).map((o) => `<option value="${escAttr(o)}">${escapeHtml(o)}</option>`).join("");
  let inner = "";
  switch (f.control) {
    case "number": inner = `<input type="number" class="f-input" placeholder="请输入">`; break;
    case "date": inner = `<input type="date" class="f-input">`; break;
    case "textarea": inner = `<textarea class="f-textarea" rows="3" placeholder="请输入"></textarea>`; break;
    case "select": inner = `<select class="f-select"><option value="">请选择</option>${options}</select>`; break;
    case "radio":
      inner = `<span class="f-radios">${(f.options || ["是", "否"]).map((o, i) =>
        `<label class="f-radio"><input type="radio" name="f_${idx}" value="${escAttr(o)}" ${i === 0 ? "checked" : ""}><span>${escapeHtml(o)}</span></label>`).join("")}</span>`;
      break;
    case "member": inner = `<select class="f-select"><option value="">选择成员</option></select>`; break;
    case "link": inner = `<select class="f-select"><option value="">选择数据</option></select>`; break;
    default: inner = `<input type="text" class="f-input" placeholder="请输入">`;
  }
  return `<div class="f-control">${inner}</div>`;
}

function fieldRowHtml(f, idx) {
  if (f.type === "separator") return `<div class="f-section-title">${escapeHtml(f.label)}</div>`;
  if (f.type === "subform") {
    const cols = (f.columns || []).map((c) => `<th>${escapeHtml(c)}</th>`).join("");
    const tds = (f.columns || []).map(() => `<td><input type="text" class="f-input f-sub-input" placeholder=""></td>`).join("");
    return `<div class="f-field f-subform-box">
      <div class="f-label">${escapeHtml(f.label)}${f.required ? '<i class="req">*</i>' : ""}</div>
      <div class="f-subform"><table class="f-subtable"><thead><tr>${cols}</tr></thead>
      <tbody><tr>${tds}</tr></tbody></table>
      <button type="button" class="f-sub-add">+ 添加</button></div></div>`;
  }
  const req = f.required ? '<i class="req">*</i>' : "";
  return `<div class="f-field"><div class="f-label">${escapeHtml(f.label)}${req}</div>${controlHtml(f, idx)}</div>`;
}

function showFormModal(form, name) {
  const view = document.getElementById("page-view");
  if (!view || !form || !form.sections) return;
  // 移除旧弹窗
  const old = view.querySelector(".fm-overlay");
  if (old) old.remove();
  const secs = form.sections.map((f, i) => fieldRowHtml(f, i)).join("");
  const overlay = document.createElement("div");
  overlay.className = "fm-overlay";
  overlay.innerHTML = `<div class="fm-modal">
    <div class="fm-head">
      <span class="fm-title">${escapeHtml(name)}</span>
      <button type="button" class="fm-close" title="关闭">×</button>
    </div>
    <div class="fm-body">
      ${form.isFlow ? '<div class="f-flow-tip">该文书为审批流程表单（专卖股长 → 法规股长 → 分管领导）。</div>' : ""}
      ${secs}
    </div>
    <div class="fm-foot">
      <button type="button" class="form-btn form-btn-primary">提交</button>
      <button type="button" class="form-btn">保存草稿</button>
      <span class="fm-tip">演示版</span>
    </div>
  </div>`;
  view.appendChild(overlay);
  overlay.querySelector(".fm-close").addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });
  overlay.querySelectorAll(".form-btn").forEach((b) =>
    b.addEventListener("click", () => alert("演示版：此操作请在简道云原系统（企业微信）中完成。")));
  overlay.querySelectorAll(".f-sub-add").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tbody = btn.closest(".f-subform-box").querySelector(".f-subtable tbody");
      const proto = tbody.querySelector("tr");
      if (proto) tbody.appendChild(proto.cloneNode(true));
    });
  });
}

/* ============ 占位页 ============ */
function renderPlaceholder(def) {
  return `<div class="ph-page"><div class="ph-card">
    <div class="ph-icon">📋</div>
    <h3>${escapeHtml(def.name)}</h3>
    <p>${escapeHtml(def.content || "")}</p>
  </div></div>`;
}

/* ============ 流程空态页（原版：我的待办等） ============ */
function renderFlowPage(def) {
  const tabs = (def.tabs || []).map((t, i) =>
    `<span class="flow-tab ${i === 0 ? "active" : ""}">${escapeHtml(t)}</span>`).join("");
  return `<div class="flow-page">
    <div class="flow-head">
      <span class="flow-title">${escapeHtml(def.name)}（全部）</span>
      <span class="flow-tabs">${tabs}</span>
      <div class="flow-btns">
        <button type="button" class="lp-btn">筛选</button>
        <button type="button" class="lp-btn">排序</button>
        <button type="button" class="lp-btn">批量提交</button>
      </div>
    </div>
    <div class="flow-empty">
      <svg viewBox="0 0 1024 1024" width="56" height="56" fill="#c9cdd6"><path d="M512 96c229.75 0 416 186.25 416 416S741.75 928 512 928 96 741.75 96 512 282.25 96 512 96zm0 64c-194.4 0-352 157.6-352 352s157.6 352 352 352 352-157.6 352-352-157.6-352-352-352zm0 96a32 32 0 0 1 32 32v208h176a32 32 0 0 1 0 64H512a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"/></svg>
      <p>${escapeHtml(def.emptyText || "暂无数据")}</p>
    </div>
  </div>`;
}

/* ============ 页面调度 ============ */
function renderPage(key) {
  const view = document.getElementById("page-view");
  const dash = document.getElementById("dashboard");
  if (!view) return;
  const def = (typeof PAGES !== "undefined" && PAGES[key]) || null;

  if (key === "home" || !def || def.type === "home") {
    view.classList.add("hidden");
    if (dash) dash.classList.remove("hidden");
    document.querySelector(".header-title").textContent = "案件仪表盘";
    return;
  }
  if (dash) dash.classList.add("hidden");
  view.classList.remove("hidden");

  let html = "";
  if (def.type === "placeholder") html = renderPlaceholder(def);
  else if (def.view === "flow") html = renderFlowPage(def);
  else if (def.view === "list") html = renderListView(def);
  else html = renderPlaceholder(def);
  view.innerHTML = html;
  document.querySelector(".header-title").textContent = def.name || "";

  // 「添加」→ 表单弹窗
  const addBtn = view.querySelector(".lp-add");
  if (addBtn) {
    addBtn.addEventListener("click", () => showFormModal(def.form, def.name));
  }
  // 演示按钮提示
  view.querySelectorAll(".lp-btn:not(.lp-add)").forEach((b) =>
    b.addEventListener("click", () => alert("演示版：此操作请在简道云原系统（企业微信）中完成。")));
}

/* ============ 菜单导航 ============ */
function setupMenu() {
  document.querySelectorAll(".menu-item.has-sub").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("open");
    });
  });
  const selectable = document.querySelectorAll(".menu-item[data-page], .submenu-item[data-page]");
  selectable.forEach((item) => {
    item.addEventListener("click", () => {
      selectable.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      renderPage(item.getAttribute("data-page"));
    });
  });
}

/* ============ 查看原始数据（首页表格） ============ */
function setupRawData() {
  const btn = document.getElementById("btn-raw");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "raw-overlay";
    overlay.innerHTML = `<div class="raw-modal"><div class="raw-modal-header"><span>原始数据</span><button class="raw-close">×</button></div><pre class="raw-content"></pre></div>`;
    overlay.querySelector(".raw-content").textContent = JSON.stringify(CASE_DATA, null, 2);
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelector(".raw-close").addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  });
}

/* ============ 初始化 ============ */
document.addEventListener("DOMContentLoaded", () => {
  renderTable();
  renderLegend();
  renderChart();
  setupRawData();
  setupMenu();
});
