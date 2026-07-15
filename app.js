const STORAGE_KEY = "knitFactoryGoodsSystem:v2";
const LEGACY_STORAGE_KEY = "knitFactoryGoodsRecords:v1";

/* ================================================================
   Demo Data — 涵盖 6 厂家 × 6 款号 × 2 个月，充分演示所有分析功能
   ================================================================ */

const SAMPLE_DELIVERIES = [
  // 刘 — 款号 2 红色（主力货，价格波动大）
  { id: "d-001", date: "2025-07-03", vendor: "刘", itemNo: "2", color: "红色", unitPrice: 13, quantity: 12, reconcileStatus: "已对账", batchNo: "07-A" },
  { id: "d-002", date: "2025-07-03", vendor: "刘", itemNo: "2", color: "红色", unitPrice: 15, quantity: 20, reconcileStatus: "已对账", batchNo: "07-A" },
  { id: "d-003", date: "2025-07-08", vendor: "刘", itemNo: "2", color: "红色", unitPrice: 14, quantity: 8, reconcileStatus: "已对账", batchNo: "07-B" },
  { id: "d-004", date: "2025-07-08", vendor: "刘", itemNo: "2", color: "红色", unitPrice: 12, quantity: 15, reconcileStatus: "已对账", batchNo: "07-B" },
  { id: "d-005", date: "2025-07-15", vendor: "刘", itemNo: "2", color: "红色", unitPrice: 16, quantity: 10, reconcileStatus: "未对账", batchNo: "07-C" },
  { id: "d-006", date: "2025-07-15", vendor: "刘", itemNo: "2", color: "红色", unitPrice: 14, quantity: 25, reconcileStatus: "未对账", batchNo: "07-C" },
  { id: "d-007", date: "2025-07-22", vendor: "刘", itemNo: "2", color: "红色", unitPrice: 13, quantity: 18, reconcileStatus: "已对账", batchNo: "07-D" },
  { id: "d-008", date: "2025-08-02", vendor: "刘", itemNo: "2", color: "红色", unitPrice: 15, quantity: 9, reconcileStatus: "已对账", batchNo: "08-A" },
  { id: "d-009", date: "2025-08-09", vendor: "刘", itemNo: "2", color: "红色", unitPrice: 14, quantity: 22, reconcileStatus: "未对账", batchNo: "08-B" },
  { id: "d-010", date: "2025-08-16", vendor: "刘", itemNo: "2", color: "红色", unitPrice: 17, quantity: 6, reconcileStatus: "未对账", batchNo: "08-C" },
  // 刘 — 款号 3 蓝色
  { id: "d-011", date: "2025-07-05", vendor: "刘", itemNo: "3", color: "蓝色", unitPrice: 13, quantity: 10, reconcileStatus: "已对账", batchNo: "07-A" },
  { id: "d-012", date: "2025-07-12", vendor: "刘", itemNo: "3", color: "蓝色", unitPrice: 14, quantity: 8, reconcileStatus: "已对账", batchNo: "07-B" },
  { id: "d-013", date: "2025-07-19", vendor: "刘", itemNo: "3", color: "蓝色", unitPrice: 12, quantity: 15, reconcileStatus: "未对账", batchNo: "07-C" },
  { id: "d-014", date: "2025-08-05", vendor: "刘", itemNo: "3", color: "蓝色", unitPrice: 15, quantity: 12, reconcileStatus: "未对账", batchNo: "08-A" },
  { id: "d-015", date: "2025-08-20", vendor: "刘", itemNo: "3", color: "蓝色", unitPrice: 13, quantity: 20, reconcileStatus: "未对账", batchNo: "08-C" },
  // 刘 — 款号 3 绿色
  { id: "d-016", date: "2025-07-28", vendor: "刘", itemNo: "3", color: "绿色", unitPrice: 12, quantity: 45, reconcileStatus: "已对账", batchNo: "07-D" },
  { id: "d-017", date: "2025-08-12", vendor: "刘", itemNo: "3", color: "绿色", unitPrice: 13, quantity: 30, reconcileStatus: "未对账", batchNo: "08-B" },

  // 龙 — 款号 6 紫色（高价值客户）
  { id: "d-020", date: "2025-07-01", vendor: "龙", itemNo: "6", color: "紫色", unitPrice: 12, quantity: 8, reconcileStatus: "已对账", batchNo: "07-A" },
  { id: "d-021", date: "2025-07-06", vendor: "龙", itemNo: "6", color: "紫色", unitPrice: 12, quantity: 50, reconcileStatus: "已对账", batchNo: "07-B" },
  { id: "d-022", date: "2025-07-14", vendor: "龙", itemNo: "6", color: "紫色", unitPrice: 13, quantity: 35, reconcileStatus: "已对账", batchNo: "07-C" },
  { id: "d-023", date: "2025-07-21", vendor: "龙", itemNo: "6", color: "紫色", unitPrice: 11, quantity: 42, reconcileStatus: "已对账", batchNo: "07-D" },
  { id: "d-024", date: "2025-08-01", vendor: "龙", itemNo: "6", color: "紫色", unitPrice: 12, quantity: 28, reconcileStatus: "未对账", batchNo: "08-A" },
  { id: "d-025", date: "2025-08-10", vendor: "龙", itemNo: "6", color: "紫色", unitPrice: 14, quantity: 15, reconcileStatus: "未对账", batchNo: "08-B" },
  { id: "d-026", date: "2025-08-18", vendor: "龙", itemNo: "6", color: "紫色", unitPrice: 13, quantity: 32, reconcileStatus: "未对账", batchNo: "08-C" },
  // 龙 — 款号 6 黑色
  { id: "d-027", date: "2025-07-25", vendor: "龙", itemNo: "6", color: "黑色", unitPrice: 14, quantity: 18, reconcileStatus: "已对账", batchNo: "07-D" },
  { id: "d-028", date: "2025-08-08", vendor: "龙", itemNo: "6", color: "黑色", unitPrice: 15, quantity: 22, reconcileStatus: "未对账", batchNo: "08-A" },
  { id: "d-029", date: "2025-08-25", vendor: "龙", itemNo: "6", color: "黑色", unitPrice: 13, quantity: 26, reconcileStatus: "未对账", batchNo: "08-C" },
  // 龙 — 款号 7 白色（新款）
  { id: "d-030", date: "2025-08-15", vendor: "龙", itemNo: "7", color: "白色", unitPrice: 18, quantity: 10, reconcileStatus: "未对账", batchNo: "08-C" },
  { id: "d-031", date: "2025-08-22", vendor: "龙", itemNo: "7", color: "白色", unitPrice: 18, quantity: 16, reconcileStatus: "未对账", batchNo: "08-C" },

  // 王 — 款号 2 绿色（小单稳定客户）
  { id: "d-040", date: "2025-07-10", vendor: "王", itemNo: "2", color: "绿色", unitPrice: 12, quantity: 5, reconcileStatus: "已对账", batchNo: "07-B" },
  { id: "d-041", date: "2025-07-20", vendor: "王", itemNo: "2", color: "绿色", unitPrice: 13, quantity: 7, reconcileStatus: "已对账", batchNo: "07-C" },
  { id: "d-042", date: "2025-08-03", vendor: "王", itemNo: "2", color: "绿色", unitPrice: 12, quantity: 6, reconcileStatus: "未对账", batchNo: "08-A" },
  { id: "d-043", date: "2025-08-17", vendor: "王", itemNo: "2", color: "绿色", unitPrice: 14, quantity: 4, reconcileStatus: "未对账", batchNo: "08-B" },
  // 王 — 款号 5 灰色
  { id: "d-044", date: "2025-07-18", vendor: "王", itemNo: "5", color: "灰色", unitPrice: 10, quantity: 12, reconcileStatus: "已对账", batchNo: "07-C" },
  { id: "d-045", date: "2025-08-07", vendor: "王", itemNo: "5", color: "灰色", unitPrice: 11, quantity: 15, reconcileStatus: "未对账", batchNo: "08-A" },
  { id: "d-046", date: "2025-08-24", vendor: "王", itemNo: "5", color: "灰色", unitPrice: 10, quantity: 20, reconcileStatus: "未对账", batchNo: "08-C" },

  // 白 — 款号 2 红色
  { id: "d-050", date: "2025-07-07", vendor: "白", itemNo: "2", color: "红色", unitPrice: 14, quantity: 6, reconcileStatus: "已对账", batchNo: "07-A" },
  { id: "d-051", date: "2025-07-16", vendor: "白", itemNo: "2", color: "红色", unitPrice: 10, quantity: 5, reconcileStatus: "已对账", batchNo: "07-C" },
  { id: "d-052", date: "2025-07-30", vendor: "白", itemNo: "2", color: "红色", unitPrice: 15, quantity: 8, reconcileStatus: "未对账", batchNo: "07-D" },
  { id: "d-053", date: "2025-08-06", vendor: "白", itemNo: "2", color: "红色", unitPrice: 13, quantity: 10, reconcileStatus: "未对账", batchNo: "08-A" },
  { id: "d-054", date: "2025-08-14", vendor: "白", itemNo: "2", color: "红色", unitPrice: 12, quantity: 7, reconcileStatus: "未对账", batchNo: "08-B" },
  // 白 — 款号 8 黑色
  { id: "d-055", date: "2025-08-01", vendor: "白", itemNo: "8", color: "黑色", unitPrice: 9, quantity: 30, reconcileStatus: "未对账", batchNo: "08-A" },
  { id: "d-056", date: "2025-08-19", vendor: "白", itemNo: "8", color: "黑色", unitPrice: 10, quantity: 25, reconcileStatus: "未对账", batchNo: "08-C" },

  // 陈（新厂家） — 款号 12 白色
  { id: "d-060", date: "2025-08-05", vendor: "陈", itemNo: "12", color: "白色", unitPrice: 16, quantity: 10, reconcileStatus: "未对账", batchNo: "08-A" },
  { id: "d-061", date: "2025-08-12", vendor: "陈", itemNo: "12", color: "白色", unitPrice: 15, quantity: 18, reconcileStatus: "未对账", batchNo: "08-B" },
  { id: "d-062", date: "2025-08-26", vendor: "陈", itemNo: "12", color: "白色", unitPrice: 16, quantity: 12, reconcileStatus: "未对账", batchNo: "08-C" },
  // 陈 — 款号 12 蓝色
  { id: "d-063", date: "2025-08-10", vendor: "陈", itemNo: "12", color: "蓝色", unitPrice: 17, quantity: 8, reconcileStatus: "未对账", batchNo: "08-B" },

  // 周 — 款号 3 红色（价格偏低）
  { id: "d-070", date: "2025-07-11", vendor: "周", itemNo: "3", color: "红色", unitPrice: 11, quantity: 15, reconcileStatus: "已对账", batchNo: "07-B" },
  { id: "d-071", date: "2025-07-24", vendor: "周", itemNo: "3", color: "红色", unitPrice: 10, quantity: 20, reconcileStatus: "已对账", batchNo: "07-D" },
  { id: "d-072", date: "2025-08-04", vendor: "周", itemNo: "3", color: "红色", unitPrice: 12, quantity: 12, reconcileStatus: "未对账", batchNo: "08-A" },
  { id: "d-073", date: "2025-08-11", vendor: "周", itemNo: "3", color: "红色", unitPrice: 11, quantity: 18, reconcileStatus: "未对账", batchNo: "08-B" },
  { id: "d-074", date: "2025-08-21", vendor: "周", itemNo: "3", color: "红色", unitPrice: 13, quantity: 8, reconcileStatus: "未对账", batchNo: "08-C" },
  // 周 — 款号 2 黑色
  { id: "d-075", date: "2025-07-29", vendor: "周", itemNo: "2", color: "黑色", unitPrice: 8, quantity: 40, reconcileStatus: "已对账", batchNo: "07-D" },
  { id: "d-076", date: "2025-08-13", vendor: "周", itemNo: "2", color: "黑色", unitPrice: 9, quantity: 35, reconcileStatus: "未对账", batchNo: "08-B" },
  { id: "d-077", date: "2025-08-28", vendor: "周", itemNo: "2", color: "黑色", unitPrice: 10, quantity: 28, reconcileStatus: "未对账", batchNo: "08-C" }
];

const SAMPLE_PAYMENTS = [
  { id: "p-001", date: "2025-07-15", vendor: "刘", amount: 2000, method: "微信", note: "付 7 月上旬" },
  { id: "p-002", date: "2025-07-30", vendor: "刘", amount: 1500, method: "银行转账", note: "付 7 月下旬" },
  { id: "p-003", date: "2025-07-20", vendor: "龙", amount: 1500, method: "银行转账", note: "付 7 月" },
  { id: "p-004", date: "2025-08-15", vendor: "龙", amount: 2000, method: "微信", note: "付 8 月上旬" },
  { id: "p-005", date: "2025-08-01", vendor: "王", amount: 200, method: "微信", note: "" },
  { id: "p-006", date: "2025-07-25", vendor: "周", amount: 600, method: "支付宝", note: "" },
  { id: "p-007", date: "2025-08-10", vendor: "白", amount: 300, method: "现金", note: "付 7 月" },
  { id: "p-008", date: "2025-08-20", vendor: "陈", amount: 500, method: "微信", note: "首次付款" }
];

const SAMPLE_SAMPLES = [
  { id: "s-001", date: "2025-06-25", vendor: "刘", itemNo: "2", color: "红色", status: "已确认", cost: 50, note: "第一批打版确认" },
  { id: "s-002", date: "2025-06-26", vendor: "龙", itemNo: "6", color: "紫色", status: "已确认", cost: 60, note: "" },
  { id: "s-003", date: "2025-06-28", vendor: "王", itemNo: "2", color: "绿色", status: "已确认", cost: 45, note: "客户确认" },
  { id: "s-004", date: "2025-06-28", vendor: "白", itemNo: "2", color: "红色", status: "已确认", cost: 50, note: "" },
  { id: "s-005", date: "2025-07-20", vendor: "周", itemNo: "3", color: "红色", status: "已确认", cost: 40, note: "新厂家打版" },
  { id: "s-006", date: "2025-07-25", vendor: "龙", itemNo: "7", color: "白色", status: "已完成", cost: 55, note: "新款试版" },
  { id: "s-007", date: "2025-08-01", vendor: "白", itemNo: "8", color: "黑色", status: "已完成", cost: 35, note: "批量前打版" },
  { id: "s-008", date: "2025-08-05", vendor: "陈", itemNo: "12", color: "白色", status: "打版中", cost: 0, note: "等材料" },
  { id: "s-009", date: "2025-08-18", vendor: "刘", itemNo: "2", color: "红色", status: "打版中", cost: 50, note: "秋季新款打版" }
];

const CURRENCY = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  maximumFractionDigits: 2
});

const NUMBER = new Intl.NumberFormat("zh-CN", {
  maximumFractionDigits: 2
});

const state = loadState();
let activeView = "dashboard";

const $ = (id) => document.getElementById(id);

const elements = {
  pageTitle: $("pageTitle"),
  qualityNotice: $("qualityNotice"),
  navItems: [...document.querySelectorAll(".nav-item")],
  views: [...document.querySelectorAll(".view")],
  dateFrom: $("dateFrom"),
  dateTo: $("dateTo"),
  vendorFilter: $("vendorFilter"),
  keywordFilter: $("keywordFilter"),
  clearFiltersButton: $("clearFiltersButton"),
  allGoodsAmount: $("allGoodsAmount"),
  filteredGoodsAmount: $("filteredGoodsAmount"),
  filteredPaidAmount: $("filteredPaidAmount"),
  filteredBalanceAmount: $("filteredBalanceAmount"),
  filteredQuantity: $("filteredQuantity"),
  vendorItemCount: $("vendorItemCount"),
  filteredRangeText: $("filteredRangeText"),
  dashboardVendorBody: $("dashboardVendorBody"),
  dateBars: $("dateBars"),
  deliveryForm: $("deliveryForm"),
  deliveryId: $("deliveryId"),
  deliveryDateInput: $("deliveryDateInput"),
  deliveryVendorInput: $("deliveryVendorInput"),
  itemNoInput: $("itemNoInput"),
  colorInput: $("colorInput"),
  unitPriceInput: $("unitPriceInput"),
  quantityInput: $("quantityInput"),
  reconcileStatusInput: $("reconcileStatusInput"),
  batchNoInput: $("batchNoInput"),
  deliveryNoteInput: $("deliveryNoteInput"),
  deliveryFormTotal: $("deliveryFormTotal"),
  saveDeliveryButton: $("saveDeliveryButton"),
  resetDeliveryFormButton: $("resetDeliveryFormButton"),
  deliveryRecordsBody: $("deliveryRecordsBody"),
  deliveryEmptyState: $("deliveryEmptyState"),
  markFilteredReconciledButton: $("markFilteredReconciledButton"),
  clearDeliveryButton: $("clearDeliveryButton"),
  vendorOptions: $("vendorOptions"),
  colorOptions: $("colorOptions"),
  vendorSummaryBody: $("vendorSummaryBody"),
  vendorSummaryCount: $("vendorSummaryCount"),
  itemSummaryBody: $("itemSummaryBody"),
  itemSummaryCount: $("itemSummaryCount"),
  paymentForm: $("paymentForm"),
  paymentId: $("paymentId"),
  paymentDateInput: $("paymentDateInput"),
  paymentVendorInput: $("paymentVendorInput"),
  paymentAmountInput: $("paymentAmountInput"),
  paymentMethodInput: $("paymentMethodInput"),
  paymentNoteInput: $("paymentNoteInput"),
  savePaymentButton: $("savePaymentButton"),
  resetPaymentFormButton: $("resetPaymentFormButton"),
  paymentCount: $("paymentCount"),
  paymentTotal: $("paymentTotal"),
  paymentVendorCount: $("paymentVendorCount"),
  paymentRecordsBody: $("paymentRecordsBody"),
  paymentEmptyState: $("paymentEmptyState"),
  clearPaymentButton: $("clearPaymentButton"),
  exportJsonButton: $("exportJsonButton"),
  exportAllJsonButton: $("exportAllJsonButton"),
  exportDeliveryCsvButton: $("exportDeliveryCsvButton"),
  exportPaymentsCsvButton: $("exportPaymentsCsvButton"),
  importFileInput: $("importFileInput"),
  resetSampleButton: $("resetSampleButton"),
  clearAllDataButton: $("clearAllDataButton"),
  exportDeliveryCsvButton2: $("exportDeliveryCsvButton2"),
  exportPaymentsCsvButton2: $("exportPaymentsCsvButton2"),
  printVendorStatementButton: $("printVendorStatementButton"),
  cloudPlatform: $("cloudPlatform"),
  cloudToken: $("cloudToken"),
  cloudOwner: $("cloudOwner"),
  cloudRepo: $("cloudRepo"),
  cloudBranch: $("cloudBranch"),
  cloudAutoBackup: $("cloudAutoBackup"),
  testCloudButton: $("testCloudButton"),
  backupToCloudButton: $("backupToCloudButton"),
  restoreFromCloudButton: $("restoreFromCloudButton"),
  cloudStatus: $("cloudStatus"),
  cloudRestoreList: $("cloudRestoreList"),
  sidebarBackupNote: $("sidebarBackupNote"),
  sidebarBackupText: $("sidebarBackupText"),
  cloudWebdavUrl: $("cloudWebdavUrl"),
  cloudWebdavAccount: $("cloudWebdavAccount"),
  cloudWebdavPassword: $("cloudWebdavPassword"),
  sampleForm: $("sampleForm"),
  sampleId: $("sampleId"),
  sampleDateInput: $("sampleDateInput"),
  sampleVendorInput: $("sampleVendorInput"),
  sampleItemNoInput: $("sampleItemNoInput"),
  sampleColorInput: $("sampleColorInput"),
  sampleStatusInput: $("sampleStatusInput"),
  sampleCostInput: $("sampleCostInput"),
  sampleNoteInput: $("sampleNoteInput"),
  saveSampleButton: $("saveSampleButton"),
  resetSampleFormButton: $("resetSampleFormButton"),
  sampleTotalCount: $("sampleTotalCount"),
  sampleVendorCount: $("sampleVendorCount"),
  sampleItemCount: $("sampleItemCount"),
  sampleStatusBreakdown: $("sampleStatusBreakdown"),
  sampleRecordsBody: $("sampleRecordsBody"),
  sampleEmptyState: $("sampleEmptyState"),
  clearSamplesButton: $("clearSamplesButton"),
  globalVoiceButton: $("globalVoiceButton"),
  aiProvider: $("aiProvider"),
  aiCustomUrl: $("aiCustomUrl"),
  aiCustomUrlLabel: $("aiCustomUrlLabel"),
  aiApiKey: $("aiApiKey"),
  aiModel: $("aiModel"),
  saveAiConfigButton: $("saveAiConfigButton"),
  aiAnalyzeVendorsButton: $("aiAnalyzeVendorsButton"),
  aiAnalyzeItemsButton: $("aiAnalyzeItemsButton"),
  aiOutput: $("aiOutput"),
  aiStatus: $("aiStatus")
};

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return normalizeState(parsed);
    } catch {
      return createSampleState();
    }
  }

  const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (legacy) {
    try {
      const legacyRecords = JSON.parse(legacy);
      if (Array.isArray(legacyRecords)) {
        return normalizeState({ deliveries: legacyRecords, payments: [] });
      }
    } catch {
      return createSampleState();
    }
  }

  return createSampleState();
}

function createSampleState() {
  return {
    deliveries: SAMPLE_DELIVERIES.map((record) => ({ ...record })),
    payments: SAMPLE_PAYMENTS.map((record) => ({ ...record })),
    samples: SAMPLE_SAMPLES.map((record) => ({ ...record })),
    meta: {
      version: 2,
      createdAt: new Date().toISOString()
    }
  };
}

function normalizeState(input) {
  return {
    deliveries: Array.isArray(input?.deliveries) ? input.deliveries.map(normalizeDelivery).filter(Boolean) : [],
    payments: Array.isArray(input?.payments) ? input.payments.map(normalizePayment).filter(Boolean) : [],
    samples: Array.isArray(input?.samples) ? input.samples.map(normalizeSample).filter(Boolean) : [],
    meta: {
      version: 2,
      createdAt: input?.meta?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastBackupAt: input?.meta?.lastBackupAt || null,
      cloudBackup: {
        platform: input?.meta?.cloudBackup?.platform || "gitee",
        owner: input?.meta?.cloudBackup?.owner || "",
        repo: input?.meta?.cloudBackup?.repo || "",
        branch: input?.meta?.cloudBackup?.branch || "master",
        autoBackup: input?.meta?.cloudBackup?.autoBackup || false,
        webdavUrl: input?.meta?.cloudBackup?.webdavUrl || "https://dav.jianguoyun.com/dav/",
        webdavAccount: input?.meta?.cloudBackup?.webdavAccount || "",
        webdavPassword: input?.meta?.cloudBackup?.webdavPassword || ""
      }
    }
  };
}

function normalizeDelivery(record) {
  if (!record) return null;
  const vendor = readText(record.vendor, record["厂家"], record["厂商"]);
  const date = readText(record.date, record["日期"], record["进货日期"]);
  const itemNo = readText(record.itemNo, record["款号"], record["货号"]);
  const color = readText(record.color, record["颜色"]);
  const unitPrice = Number(readValue(record.unitPrice, record["单价"], record["单件价格"]));
  const quantity = Number(readValue(record.quantity, record["数量"]));

  if (!vendor || !date || !itemNo || !color || Number.isNaN(unitPrice) || Number.isNaN(quantity)) {
    return null;
  }

  return {
    id: readText(record.id) || createId("d"),
    date,
    vendor,
    itemNo,
    color,
    unitPrice,
    quantity,
    reconcileStatus: readText(record.reconcileStatus, record["对账状态"]) || "未对账",
    batchNo: readText(record.batchNo, record["批次"], record["单号"]),
    note: readText(record.note, record["备注"])
  };
}

function normalizePayment(record) {
  if (!record) return null;
  const vendor = readText(record.vendor, record["厂家"], record["厂商"]);
  const date = readText(record.date, record["日期"], record["收款日期"]);
  const amount = Number(readValue(record.amount, record["金额"], record["收款金额"]));

  if (!vendor || !date || Number.isNaN(amount)) return null;

  return {
    id: readText(record.id) || createId("p"),
    date,
    vendor,
    amount,
    method: readText(record.method, record["方式"], record["收款方式"]) || "其他",
    note: readText(record.note, record["备注"])
  };
}

function normalizeSample(record) {
  if (!record) return null;
  const vendor = readText(record.vendor, record["厂家"], record["厂商"]);
  const date = readText(record.date, record["日期"], record["打版日期"]);
  const itemNo = readText(record.itemNo, record["款号"], record["货号"]);
  const color = readText(record.color, record["颜色"]);
  const status = readText(record.status, record["状态"]) || "打版中";
  const cost = Number(readValue(record.cost, record["费用"], record["打版费用"])) || 0;
  const note = readText(record.note, record["备注"]);

  if (!vendor || !date || !itemNo || !color) return null;

  return {
    id: readText(record.id) || createId("s"),
    date,
    vendor,
    itemNo,
    color,
    status: ["打版中", "已完成", "已确认"].includes(status) ? status : "打版中",
    cost,
    note
  };
}

function readValue(...values) {
  return values.find((value) => value !== undefined && value !== null && String(value).trim() !== "");
}

function readText(...values) {
  const value = readValue(...values);
  return value === undefined ? "" : String(value).trim();
}

function saveState() {
  state.meta.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (state.meta.cloudBackup?.autoBackup && cloudBackupAvailable()) {
    backupToCloud(true);
  }
}

function createId(prefix) {
  const random = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${random}`;
}

function deliveryAmount(delivery) {
  return roundMoney(Number(delivery.unitPrice) * Number(delivery.quantity));
}

function roundMoney(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function sumDeliveryAmount(list) {
  return roundMoney(list.reduce((sum, delivery) => sum + deliveryAmount(delivery), 0));
}

function sumPaymentAmount(list) {
  return roundMoney(list.reduce((sum, payment) => sum + Number(payment.amount), 0));
}

function sumQuantity(list) {
  return list.reduce((sum, delivery) => sum + Number(delivery.quantity), 0);
}

function uniqueCount(list, selector) {
  return new Set(list.map(selector).filter(Boolean)).size;
}

function groupBy(list, keyFactory) {
  return list.reduce((map, item) => {
    const key = keyFactory(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
    return map;
  }, new Map());
}

function getFilteredDeliveries() {
  const from = elements.dateFrom.value;
  const to = elements.dateTo.value;
  const vendor = elements.vendorFilter.value;
  const keyword = elements.keywordFilter.value.trim().toLowerCase();

  return state.deliveries.filter((delivery) => {
    if (from && delivery.date < from) return false;
    if (to && delivery.date > to) return false;
    if (vendor && delivery.vendor !== vendor) return false;
    if (keyword) {
      const haystack = `${delivery.vendor} ${delivery.itemNo} ${delivery.color} ${delivery.batchNo} ${delivery.note}`.toLowerCase();
      if (!haystack.includes(keyword)) return false;
    }
    return true;
  });
}

function getFilteredPayments() {
  const from = elements.dateFrom.value;
  const to = elements.dateTo.value;
  const vendor = elements.vendorFilter.value;
  const keyword = elements.keywordFilter.value.trim().toLowerCase();

  return state.payments.filter((payment) => {
    if (from && payment.date < from) return false;
    if (to && payment.date > to) return false;
    if (vendor && payment.vendor !== vendor) return false;
    if (keyword) {
      const haystack = `${payment.vendor} ${payment.method} ${payment.note}`.toLowerCase();
      if (!haystack.includes(keyword)) return false;
    }
    return true;
  });
}

function getFilteredSamples() {
  const from = elements.dateFrom.value;
  const to = elements.dateTo.value;
  const vendor = elements.vendorFilter.value;
  const keyword = elements.keywordFilter.value.trim().toLowerCase();

  return state.samples.filter((sample) => {
    if (from && sample.date < from) return false;
    if (to && sample.date > to) return false;
    if (vendor && sample.vendor !== vendor) return false;
    if (keyword) {
      const haystack = `${sample.vendor} ${sample.itemNo} ${sample.color} ${sample.status} ${sample.note}`.toLowerCase();
      if (!haystack.includes(keyword)) return false;
    }
    return true;
  });
}

function sortByDateDesc(list) {
  return [...list].sort((a, b) => {
    const dateOrder = b.date.localeCompare(a.date);
    if (dateOrder) return dateOrder;
    return a.vendor.localeCompare(b.vendor, "zh-CN");
  });
}

function render() {
  const deliveries = getFilteredDeliveries();
  const payments = getFilteredPayments();
  const vendorRows = buildVendorRows(deliveries, payments);

  renderOptions();
  renderNotice();
  renderSidebarBackup();
  renderMetrics(deliveries, payments);
  renderDashboard(vendorRows, deliveries);
  renderDeliveryRecords(deliveries);
  renderVendorSummary(vendorRows);
  renderItemSummary(deliveries);
  renderPaymentSummary(payments);
  renderPaymentRecords(payments);
  renderSampleStats();
  renderSampleRecords();
  updateDeliveryFormTotal();
}

function renderOptions() {
  const selectedVendor = elements.vendorFilter.value;
  const vendors = [...new Set([
    ...state.deliveries.map((record) => record.vendor),
    ...state.payments.map((record) => record.vendor)
  ])].sort((a, b) => a.localeCompare(b, "zh-CN"));
  const colors = [...new Set(state.deliveries.map((record) => record.color))].sort((a, b) => a.localeCompare(b, "zh-CN"));

  elements.vendorFilter.innerHTML = `<option value="">全部厂家</option>${vendors.map((vendor) => `<option value="${escapeHtml(vendor)}">${escapeHtml(vendor)}</option>`).join("")}`;
  elements.vendorFilter.value = vendors.includes(selectedVendor) ? selectedVendor : "";
  elements.vendorOptions.innerHTML = vendors.map((vendor) => `<option value="${escapeHtml(vendor)}"></option>`).join("");
  elements.colorOptions.innerHTML = colors.map((color) => `<option value="${escapeHtml(color)}"></option>`).join("");
}

function renderNotice() {
  const sampleGoods = sumDeliveryAmount(SAMPLE_DELIVERIES);
  const currentGoods = sumDeliveryAmount(state.deliveries);
  const isSample = state.deliveries.length === SAMPLE_DELIVERIES.length && currentGoods === sampleGoods;

  elements.qualityNotice.classList.toggle("is-visible", isSample);
  elements.qualityNotice.innerHTML = isSample
    ? `<div class="notice-item">当前是演示数据，进货明细合计 ${NUMBER.format(sumQuantity(state.deliveries))} 件、${CURRENCY.format(currentGoods)}。这些数据只用于演示系统，不会限制实际业务结构。</div>`
    : "";
}

function renderSidebarBackup() {
  const dataDays = daysSince(state.meta.lastBackupAt);
  const cloudDays = daysSince(state.meta.lastCloudBackupAt);
  const hasData = state.deliveries.length > 0 || state.payments.length > 0;

  if (!hasData) {
    elements.sidebarBackupNote.style.display = "none";
    return;
  }

  const parts = [];
  if (dataDays >= 7 || !state.meta.lastBackupAt) {
    const label = !state.meta.lastBackupAt ? "尚未备份" : `${dataDays} 天前`;
    parts.push(`本地 JSON 备份：<strong style="color:var(--danger)">${label}</strong>`);
  } else {
    parts.push(`本地备份：${dataDays} 天前`);
  }

  if (state.meta.cloudBackup?.owner) {
    if (cloudDays >= 7 || !state.meta.lastCloudBackupAt) {
      const label = !state.meta.lastCloudBackupAt ? "未同步" : `${cloudDays} 天前`;
      parts.push(`云端：<strong style="color:var(--danger)">${label}</strong>`);
    } else {
      parts.push(`云端：${cloudDays} 天前`);
    }
  }

  if (parts.length) {
    elements.sidebarBackupNote.style.display = "block";
    elements.sidebarBackupText.innerHTML = parts.join(" · ");
  } else {
    elements.sidebarBackupNote.style.display = "none";
  }
}

function daysSince(isoString) {
  if (!isoString) return Infinity;
  const then = new Date(isoString);
  const now = new Date();
  return Math.floor((now.getTime() - then.getTime()) / 86400000);
}

function renderMetrics(deliveries, payments) {
  const filteredGoods = sumDeliveryAmount(deliveries);
  const filteredPaid = sumPaymentAmount(payments);
  const allGoods = sumDeliveryAmount(state.deliveries);
  const balance = roundMoney(filteredGoods - filteredPaid);
  const vendorCount = uniqueCount(deliveries, (delivery) => delivery.vendor);
  const itemCount = uniqueCount(deliveries, (delivery) => delivery.itemNo);

  elements.allGoodsAmount.textContent = CURRENCY.format(allGoods);
  elements.filteredGoodsAmount.textContent = CURRENCY.format(filteredGoods);
  elements.filteredPaidAmount.textContent = CURRENCY.format(filteredPaid);
  elements.filteredBalanceAmount.textContent = CURRENCY.format(balance);
  elements.filteredQuantity.textContent = NUMBER.format(sumQuantity(deliveries));
  elements.vendorItemCount.textContent = `${NUMBER.format(vendorCount)} / ${NUMBER.format(itemCount)}`;
  elements.filteredRangeText.textContent = buildRangeLabel();
}

function buildRangeLabel() {
  const parts = [];
  const from = elements.dateFrom.value;
  const to = elements.dateTo.value;
  const vendor = elements.vendorFilter.value;
  const keyword = elements.keywordFilter.value.trim();

  if (from || to) parts.push(`${from || "最早"} 至 ${to || "最新"}`);
  if (vendor) parts.push(`${vendor} 厂家`);
  if (keyword) parts.push(`关键词：${keyword}`);
  return parts.length ? parts.join(" · ") : "全部记录";
}

function buildVendorRows(deliveries, payments) {
  const vendorNames = new Set([
    ...deliveries.map((delivery) => delivery.vendor),
    ...payments.map((payment) => payment.vendor)
  ]);

  return [...vendorNames].map((vendor) => {
    const vendorDeliveries = deliveries.filter((delivery) => delivery.vendor === vendor);
    const vendorPayments = payments.filter((payment) => payment.vendor === vendor);
    const goodsAmount = sumDeliveryAmount(vendorDeliveries);
    const paidAmount = sumPaymentAmount(vendorPayments);

    return {
      vendor,
      itemCount: uniqueCount(vendorDeliveries, (delivery) => delivery.itemNo),
      quantity: sumQuantity(vendorDeliveries),
      goodsAmount,
      paidAmount,
      balance: roundMoney(goodsAmount - paidAmount),
      unreconciledCount: vendorDeliveries.filter((delivery) => delivery.reconcileStatus !== "已对账").length
    };
  }).sort((a, b) => b.balance - a.balance);
}

function renderDashboard(vendorRows, deliveries) {
  elements.dashboardVendorBody.innerHTML = vendorRows.length
    ? vendorRows.slice(0, 8).map((row) => `
      <tr>
        <td><span class="tag">${escapeHtml(row.vendor)}</span></td>
        <td class="number">${CURRENCY.format(row.goodsAmount)}</td>
        <td class="number">${CURRENCY.format(row.paidAmount)}</td>
        <td class="number">${CURRENCY.format(row.balance)}</td>
      </tr>
    `).join("")
    : emptyRow(4, "暂无厂家数据");

  renderDateBars(deliveries);
}

function renderDateBars(deliveries) {
  const rows = [...groupBy(deliveries, (delivery) => delivery.date).entries()]
    .map(([date, list]) => ({ date, amount: sumDeliveryAmount(list), quantity: sumQuantity(list) }))
    .sort((a, b) => a.date.localeCompare(b.date));
  const maxAmount = Math.max(...rows.map((row) => row.amount), 0);

  elements.dateBars.innerHTML = rows.length
    ? rows.map((row) => {
      const width = maxAmount ? Math.max(5, Math.round((row.amount / maxAmount) * 100)) : 0;
      return `
        <div class="date-bar">
          <div class="date-bar-row">
            <span>${escapeHtml(row.date)}</span>
            <span>${CURRENCY.format(row.amount)} · ${NUMBER.format(row.quantity)} 件</span>
          </div>
          <div class="bar-track" aria-hidden="true">
            <div class="bar-fill" style="width: ${width}%"></div>
          </div>
        </div>
      `;
    }).join("")
    : `<p class="empty-state is-visible">暂无每日进货数据。</p>`;
}

function renderDeliveryRecords(deliveries) {
  const rows = sortByDateDesc(deliveries);
  elements.deliveryRecordsBody.innerHTML = rows.map((delivery) => `
    <tr>
      <td>${escapeHtml(delivery.date)}</td>
      <td>${escapeHtml(delivery.vendor)}</td>
      <td><span class="tag">${escapeHtml(delivery.itemNo)}</span></td>
      <td>${escapeHtml(delivery.color)}</td>
      <td class="number">${CURRENCY.format(delivery.unitPrice)}</td>
      <td class="number">${NUMBER.format(delivery.quantity)}</td>
      <td class="number">${CURRENCY.format(deliveryAmount(delivery))}</td>
      <td>${statusPill(delivery.reconcileStatus)}</td>
      <td>${escapeHtml(delivery.batchNo || "—")}</td>
      <td>${escapeHtml(delivery.note || "—")}</td>
      <td>
        <div class="row-actions">
          <button class="link-button" type="button" data-delivery-action="edit" data-id="${escapeHtml(delivery.id)}">编辑</button>
          <button class="link-button delete" type="button" data-delivery-action="delete" data-id="${escapeHtml(delivery.id)}">删除</button>
        </div>
      </td>
    </tr>
  `).join("");
  elements.deliveryEmptyState.classList.toggle("is-visible", rows.length === 0);
}

function statusPill(status) {
  const done = status === "已对账";
  return `<span class="status-pill ${done ? "is-done" : "is-open"}">${escapeHtml(status || "未对账")}</span>`;
}

function renderVendorSummary(rows) {
  elements.vendorSummaryCount.textContent = `${rows.length} 家`;
  elements.vendorSummaryBody.innerHTML = rows.length
    ? rows.map((row) => `
      <tr>
        <td><span class="tag">${escapeHtml(row.vendor)}</span></td>
        <td class="number">${NUMBER.format(row.itemCount)}</td>
        <td class="number">${NUMBER.format(row.quantity)}</td>
        <td class="number">${CURRENCY.format(row.goodsAmount)}</td>
        <td class="number">${CURRENCY.format(row.paidAmount)}</td>
        <td class="number">${CURRENCY.format(row.balance)}</td>
        <td class="number">${NUMBER.format(row.unreconciledCount)}</td>
        <td><button class="link-button" type="button" data-vendor="${escapeHtml(row.vendor)}">只看此厂家</button></td>
      </tr>
    `).join("")
    : emptyRow(8, "暂无厂家汇总");
}

function renderItemSummary(deliveries) {
  const rows = [...groupBy(deliveries, (delivery) => `${delivery.itemNo}|||${delivery.color}`).entries()]
    .map(([key, list]) => {
      const [itemNo, color] = key.split("|||");
      const amount = sumDeliveryAmount(list);
      const quantity = sumQuantity(list);
      const prices = list.map((delivery) => Number(delivery.unitPrice));
      return {
        itemNo,
        color,
        vendors: [...new Set(list.map((delivery) => delivery.vendor))].sort((a, b) => a.localeCompare(b, "zh-CN")),
        recordCount: list.length,
        quantity,
        amount,
        average: quantity ? amount / quantity : 0,
        minPrice: Math.min(...prices),
        maxPrice: Math.max(...prices)
      };
    }).sort((a, b) => b.amount - a.amount);

  elements.itemSummaryCount.textContent = `${rows.length} 项`;
  elements.itemSummaryBody.innerHTML = rows.length
    ? rows.map((row) => `
      <tr>
        <td><span class="tag">${escapeHtml(row.itemNo)}</span></td>
        <td>${escapeHtml(row.color)}</td>
        <td>${escapeHtml(row.vendors.join("、"))}</td>
        <td class="number">${NUMBER.format(row.recordCount)}</td>
        <td class="number">${NUMBER.format(row.quantity)}</td>
        <td class="number">${CURRENCY.format(row.amount)}</td>
        <td class="number">${CURRENCY.format(row.average)}</td>
        <td class="number">${CURRENCY.format(row.minPrice)}</td>
        <td class="number">${CURRENCY.format(row.maxPrice)}</td>
      </tr>
    `).join("")
    : emptyRow(9, "暂无款号数据");
}

function renderPaymentSummary(payments) {
  elements.paymentCount.textContent = NUMBER.format(payments.length);
  elements.paymentTotal.textContent = CURRENCY.format(sumPaymentAmount(payments));
  elements.paymentVendorCount.textContent = NUMBER.format(uniqueCount(payments, (payment) => payment.vendor));
}

function renderPaymentRecords(payments) {
  const rows = sortByDateDesc(payments);
  elements.paymentRecordsBody.innerHTML = rows.map((payment) => `
    <tr>
      <td>${escapeHtml(payment.date)}</td>
      <td>${escapeHtml(payment.vendor)}</td>
      <td class="number">${CURRENCY.format(payment.amount)}</td>
      <td>${escapeHtml(payment.method)}</td>
      <td>${escapeHtml(payment.note || "—")}</td>
      <td>
        <div class="row-actions">
          <button class="link-button" type="button" data-payment-action="edit" data-id="${escapeHtml(payment.id)}">编辑</button>
          <button class="link-button delete" type="button" data-payment-action="delete" data-id="${escapeHtml(payment.id)}">删除</button>
        </div>
      </td>
    </tr>
  `).join("");
  elements.paymentEmptyState.classList.toggle("is-visible", rows.length === 0);
}

function renderSampleStats() {
  const samples = getFilteredSamples();
  elements.sampleTotalCount.textContent = NUMBER.format(samples.length);
  elements.sampleVendorCount.textContent = NUMBER.format(uniqueCount(samples, (s) => s.vendor));
  elements.sampleItemCount.textContent = NUMBER.format(uniqueCount(samples, (s) => s.itemNo));
  const inProgress = samples.filter((s) => s.status === "打版中").length;
  const confirmed = samples.filter((s) => s.status === "已确认").length;
  elements.sampleStatusBreakdown.textContent = `${NUMBER.format(inProgress)} / ${NUMBER.format(confirmed)}`;
}

function renderSampleRecords() {
  const samples = getFilteredSamples();
  const rows = sortByDateDesc(samples);
  elements.sampleRecordsBody.innerHTML = rows.map((sample) => `
    <tr>
      <td>${escapeHtml(sample.date)}</td>
      <td>${escapeHtml(sample.vendor)}</td>
      <td><span class="tag">${escapeHtml(sample.itemNo)}</span></td>
      <td>${escapeHtml(sample.color)}</td>
      <td>${sampleStatusPill(sample.status)}</td>
      <td class="number">${sample.cost ? CURRENCY.format(sample.cost) : "—"}</td>
      <td>${escapeHtml(sample.note || "—")}</td>
      <td>
        <div class="row-actions">
          <button class="link-button" type="button" data-sample-action="edit" data-id="${escapeHtml(sample.id)}">编辑</button>
          <button class="link-button delete" type="button" data-sample-action="delete" data-id="${escapeHtml(sample.id)}">删除</button>
        </div>
      </td>
    </tr>
  `).join("");
  elements.sampleEmptyState.classList.toggle("is-visible", rows.length === 0);
}

function sampleStatusPill(status) {
  if (status === "已确认") return `<span class="status-pill is-done">已确认</span>`;
  if (status === "已完成") return `<span class="status-pill" style="background:var(--accent-soft);color:var(--accent-strong);">已完成</span>`;
  return `<span class="status-pill is-open">打版中</span>`;
}

function resetSampleForm() {
  elements.sampleId.value = "";
  elements.sampleForm.reset();
  elements.sampleDateInput.value = getToday();
  elements.sampleStatusInput.value = "打版中";
  elements.saveSampleButton.textContent = "保存打版记录";
}

function handleSampleSubmit(event) {
  event.preventDefault();
  const sample = normalizeSample({
    id: elements.sampleId.value || createId("s"),
    date: elements.sampleDateInput.value,
    vendor: elements.sampleVendorInput.value,
    itemNo: elements.sampleItemNoInput.value,
    color: elements.sampleColorInput.value,
    status: elements.sampleStatusInput.value,
    cost: elements.sampleCostInput.value,
    note: elements.sampleNoteInput.value
  });

  if (!sample) {
    alert("请完整填写打版日期、厂家、款号和颜色。");
    return;
  }

  upsertById(state.samples, sample);
  saveState();
  resetSampleForm();
  render();
}

function handleSampleAction(event) {
  const button = event.target.closest("button[data-sample-action]");
  if (!button) return;

  const sample = state.samples.find((record) => record.id === button.dataset.id);
  if (!sample) return;

  if (button.dataset.sampleAction === "edit") {
    activeView = "samples";
    applyActiveView();
    fillSampleForm(sample);
  }

  if (button.dataset.sampleAction === "delete") {
    if (!confirm(`确定删除 ${sample.date} ${sample.vendor} 款号 ${sample.itemNo} 的打版记录吗？`)) return;
    state.samples = state.samples.filter((record) => record.id !== sample.id);
    saveState();
    render();
  }
}

function fillSampleForm(sample) {
  elements.sampleId.value = sample.id;
  elements.sampleDateInput.value = sample.date;
  elements.sampleVendorInput.value = sample.vendor;
  elements.sampleItemNoInput.value = sample.itemNo;
  elements.sampleColorInput.value = sample.color;
  elements.sampleStatusInput.value = sample.status || "打版中";
  elements.sampleCostInput.value = sample.cost || "";
  elements.sampleNoteInput.value = sample.note || "";
  elements.saveSampleButton.textContent = "更新打版记录";
  elements.sampleVendorInput.focus();
}

function clearSamples() {
  if (!confirm("确定清空所有打版记录吗？建议先导出备份。")) return;
  state.samples = [];
  saveState();
  render();
}

function emptyRow(colspan, text) {
  return `<tr><td colspan="${colspan}" class="subtle">${text}</td></tr>`;
}

function resetDeliveryForm() {
  elements.deliveryId.value = "";
  elements.deliveryForm.reset();
  elements.deliveryDateInput.value = getToday();
  elements.reconcileStatusInput.value = "未对账";
  elements.saveDeliveryButton.textContent = "保存进货记录";
  updateDeliveryFormTotal();
}

function resetPaymentForm() {
  elements.paymentId.value = "";
  elements.paymentForm.reset();
  elements.paymentDateInput.value = getToday();
  elements.paymentMethodInput.value = "现金";
  elements.savePaymentButton.textContent = "保存收款记录";
}

function updateDeliveryFormTotal() {
  const unitPrice = Number(elements.unitPriceInput.value || 0);
  const quantity = Number(elements.quantityInput.value || 0);
  elements.deliveryFormTotal.textContent = CURRENCY.format(roundMoney(unitPrice * quantity));
}

function getToday() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function handleDeliverySubmit(event) {
  event.preventDefault();
  const delivery = normalizeDelivery({
    id: elements.deliveryId.value || createId("d"),
    date: elements.deliveryDateInput.value,
    vendor: elements.deliveryVendorInput.value,
    itemNo: elements.itemNoInput.value,
    color: elements.colorInput.value,
    unitPrice: elements.unitPriceInput.value,
    quantity: elements.quantityInput.value,
    reconcileStatus: elements.reconcileStatusInput.value,
    batchNo: elements.batchNoInput.value,
    note: elements.deliveryNoteInput.value
  });

  if (!delivery) {
    alert("请完整填写进货日期、厂家、款号、颜色、单件价格和数量。");
    return;
  }

  upsertById(state.deliveries, delivery);
  saveState();
  resetDeliveryForm();
  render();
}

function handlePaymentSubmit(event) {
  event.preventDefault();
  const payment = normalizePayment({
    id: elements.paymentId.value || createId("p"),
    date: elements.paymentDateInput.value,
    vendor: elements.paymentVendorInput.value,
    amount: elements.paymentAmountInput.value,
    method: elements.paymentMethodInput.value,
    note: elements.paymentNoteInput.value
  });

  if (!payment) {
    alert("请完整填写收款日期、厂家和金额。");
    return;
  }

  upsertById(state.payments, payment);
  saveState();
  resetPaymentForm();
  render();
}

function upsertById(list, item) {
  const index = list.findIndex((existing) => existing.id === item.id);
  if (index >= 0) {
    list[index] = item;
  } else {
    list.push(item);
  }
}

function handleDeliveryAction(event) {
  const button = event.target.closest("button[data-delivery-action]");
  if (!button) return;

  const delivery = state.deliveries.find((record) => record.id === button.dataset.id);
  if (!delivery) return;

  if (button.dataset.deliveryAction === "edit") {
    activeView = "deliveries";
    applyActiveView();
    fillDeliveryForm(delivery);
  }

  if (button.dataset.deliveryAction === "delete") {
    if (!confirm(`确定删除 ${delivery.date} ${delivery.vendor} 款号 ${delivery.itemNo} 的进货记录吗？`)) return;
    state.deliveries = state.deliveries.filter((record) => record.id !== delivery.id);
    saveState();
    render();
  }
}

function fillDeliveryForm(delivery) {
  elements.deliveryId.value = delivery.id;
  elements.deliveryDateInput.value = delivery.date;
  elements.deliveryVendorInput.value = delivery.vendor;
  elements.itemNoInput.value = delivery.itemNo;
  elements.colorInput.value = delivery.color;
  elements.unitPriceInput.value = delivery.unitPrice;
  elements.quantityInput.value = delivery.quantity;
  elements.reconcileStatusInput.value = delivery.reconcileStatus || "未对账";
  elements.batchNoInput.value = delivery.batchNo || "";
  elements.deliveryNoteInput.value = delivery.note || "";
  elements.saveDeliveryButton.textContent = "更新进货记录";
  updateDeliveryFormTotal();
  elements.deliveryVendorInput.focus();
}

function handlePaymentAction(event) {
  const button = event.target.closest("button[data-payment-action]");
  if (!button) return;

  const payment = state.payments.find((record) => record.id === button.dataset.id);
  if (!payment) return;

  if (button.dataset.paymentAction === "edit") {
    activeView = "payments";
    applyActiveView();
    fillPaymentForm(payment);
  }

  if (button.dataset.paymentAction === "delete") {
    if (!confirm(`确定删除 ${payment.date} ${payment.vendor} 的收款记录吗？`)) return;
    state.payments = state.payments.filter((record) => record.id !== payment.id);
    saveState();
    render();
  }
}

function fillPaymentForm(payment) {
  elements.paymentId.value = payment.id;
  elements.paymentDateInput.value = payment.date;
  elements.paymentVendorInput.value = payment.vendor;
  elements.paymentAmountInput.value = payment.amount;
  elements.paymentMethodInput.value = payment.method;
  elements.paymentNoteInput.value = payment.note || "";
  elements.savePaymentButton.textContent = "更新收款记录";
  elements.paymentVendorInput.focus();
}

function markFilteredReconciled() {
  const filteredIds = new Set(getFilteredDeliveries().map((delivery) => delivery.id));
  if (!filteredIds.size) return;
  if (!confirm(`确定将当前筛选出的 ${filteredIds.size} 条进货记录标记为已对账吗？`)) return;

  state.deliveries = state.deliveries.map((delivery) => filteredIds.has(delivery.id)
    ? { ...delivery, reconcileStatus: "已对账" }
    : delivery);
  saveState();
  render();
}

function clearFilters() {
  elements.dateFrom.value = "";
  elements.dateTo.value = "";
  elements.vendorFilter.value = "";
  elements.keywordFilter.value = "";
  render();
}

function resetSampleData() {
  if (!confirm("恢复演示数据会覆盖当前浏览器里的全部记录，确定继续吗？")) return;
  const sample = createSampleState();
  state.deliveries = sample.deliveries;
  state.payments = sample.payments;
  state.meta = sample.meta;
  saveState();
  clearFilters();
  resetDeliveryForm();
  resetPaymentForm();
  render();
}

function clearDeliveries() {
  if (!confirm("确定清空所有进货记录吗？建议先导出备份。")) return;
  state.deliveries = [];
  saveState();
  render();
}

function clearPayments() {
  if (!confirm("确定清空所有收款记录吗？建议先导出备份。")) return;
  state.payments = [];
  saveState();
  render();
}

function clearAllData() {
  if (!confirm("确定清空全部进货和收款数据吗？建议先导出完整备份。")) return;
  state.deliveries = [];
  state.payments = [];
  saveState();
  clearFilters();
  render();
}

function exportJson() {
  state.meta.lastBackupAt = new Date().toISOString();
  saveState();
  downloadFile("针织厂进货货款系统-完整备份.json", JSON.stringify(state, null, 2), "application/json;charset=utf-8");
}

function exportDeliveryCsv() {
  const headers = ["日期", "厂家", "款号", "颜色", "单价", "数量", "总价", "对账状态", "批次", "备注"];
  const rows = sortByDateDesc(state.deliveries).map((delivery) => [
    delivery.date,
    delivery.vendor,
    delivery.itemNo,
    delivery.color,
    delivery.unitPrice,
    delivery.quantity,
    deliveryAmount(delivery),
    delivery.reconcileStatus,
    delivery.batchNo,
    delivery.note
  ]);
  downloadCsv("进货记录.csv", headers, rows);
}

function exportPaymentsCsv() {
  const headers = ["日期", "厂家", "收款金额", "收款方式", "备注"];
  const rows = sortByDateDesc(state.payments).map((payment) => [
    payment.date,
    payment.vendor,
    payment.amount,
    payment.method,
    payment.note
  ]);
  downloadCsv("收款记录.csv", headers, rows);
}

function printVendorStatement() {
  const deliveries = getFilteredDeliveries();
  const payments = getFilteredPayments();
  const vendorRows = buildVendorRows(deliveries, payments);

  if (!vendorRows.length) {
    alert("当前没有厂家数据可打印。");
    return;
  }

  const rangeText = buildRangeLabel();
  const now = new Date().toLocaleString("zh-CN");
  const rowsHtml = vendorRows.map((row) => `
    <tr>
      <td>${escapeHtml(row.vendor)}</td>
      <td style="text-align:right">${NUMBER.format(row.itemCount)}</td>
      <td style="text-align:right">${NUMBER.format(row.quantity)}</td>
      <td style="text-align:right">${CURRENCY.format(row.goodsAmount)}</td>
      <td style="text-align:right">${CURRENCY.format(row.paidAmount)}</td>
      <td style="text-align:right">${CURRENCY.format(row.balance)}</td>
      <td style="text-align:right">${NUMBER.format(row.unreconciledCount)}</td>
    </tr>
  `).join("");

  const goodsTotal = sumDeliveryAmount(deliveries);
  const paidTotal = sumPaymentAmount(payments);
  const balanceTotal = roundMoney(goodsTotal - paidTotal);

  const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>厂家对账单</title>
  <style>
    body { font-family: "Microsoft YaHei", system-ui, sans-serif; margin: 32px; color: #1a1a1a; }
    h1 { margin: 0 0 6px; font-size: 24px; }
    .meta { color: #666; font-size: 13px; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    th, td { padding: 10px 12px; border: 1px solid #ddd; font-size: 14px; }
    th { background: #f5f5f5; font-weight: 800; text-align: left; }
    .number { text-align: right; }
    .total-row td { font-weight: 800; border-top: 2px solid #333; background: #fafafa; }
    @media print {
      body { margin: 16px; }
      button { display: none; }
    }
  </style>
</head>
<body>
  <h1>针织厂厂家对账单</h1>
  <p class="meta">范围：${escapeHtml(rangeText)} &nbsp;|&nbsp; 打印时间：${escapeHtml(now)}</p>
  <table>
    <thead>
      <tr>
        <th>厂家</th>
        <th class="number">款号数</th>
        <th class="number">进货数量</th>
        <th class="number">进货货款</th>
        <th class="number">已付</th>
        <th class="number">未付余额</th>
        <th class="number">未对账笔数</th>
      </tr>
    </thead>
    <tbody>
      ${rowsHtml}
      <tr class="total-row">
        <td>合计（${vendorRows.length} 家）</td>
        <td class="number">—</td>
        <td class="number">${NUMBER.format(sumQuantity(deliveries))}</td>
        <td class="number">${CURRENCY.format(goodsTotal)}</td>
        <td class="number">${CURRENCY.format(paidTotal)}</td>
        <td class="number">${CURRENCY.format(balanceTotal)}</td>
        <td class="number">—</td>
      </tr>
    </tbody>
  </table>
  <p style="margin-top: 24px;">
    <button onclick="window.print()" style="padding:10px 24px;font-size:15px;font-weight:800;border-radius:8px;border:1px solid #ccc;background:#fff;cursor:pointer;">
      打印此页
    </button>
  </p>
</body>
</html>`;

  const printWindow = window.open("", "_blank", "width=960,height=720");
  if (!printWindow) {
    alert("无法打开打印窗口。请检查浏览器是否阻止了弹窗。");
    return;
  }
  printWindow.document.write(html);
  printWindow.document.close();
}

/* ================================================================
   Cloud Backup — GitHub / Gitee
   ================================================================ */

function getCloudConfig() {
  const platform = elements.cloudPlatform?.value || "gitee";
  const owner = (elements.cloudOwner?.value || "").trim();
  const repo = (elements.cloudRepo?.value || "").trim();
  const branch = (elements.cloudBranch?.value || "").trim() || "master";
  const autoBackup = elements.cloudAutoBackup?.checked || false;
  const webdavUrl = (elements.cloudWebdavUrl?.value || "").trim() || "https://dav.jianguoyun.com/dav/";
  const webdavAccount = (elements.cloudWebdavAccount?.value || "").trim();
  const webdavPassword = (elements.cloudWebdavPassword?.value || "").trim();
  return { platform, owner, repo, branch, autoBackup, webdavUrl, webdavAccount, webdavPassword };
}

function saveCloudConfig(config) {
  state.meta.cloudBackup = { ...state.meta.cloudBackup, ...config };
  // Don't persist password in localStorage for WebDAV (security)
  if (config.webdavPassword !== undefined) {
    state.meta.cloudBackup.webdavPassword = "";
  }
  saveState();
}

function loadCloudConfig() {
  const cfg = state.meta.cloudBackup || {};
  if (elements.cloudPlatform) elements.cloudPlatform.value = cfg.platform || "gitee";
  if (elements.cloudOwner) elements.cloudOwner.value = cfg.owner || "";
  if (elements.cloudRepo) elements.cloudRepo.value = cfg.repo || "";
  if (elements.cloudBranch) elements.cloudBranch.value = cfg.branch || "master";
  if (elements.cloudAutoBackup) elements.cloudAutoBackup.checked = cfg.autoBackup || false;
  if (elements.cloudWebdavUrl) elements.cloudWebdavUrl.value = cfg.webdavUrl || "https://dav.jianguoyun.com/dav/";
  if (elements.cloudWebdavAccount) elements.cloudWebdavAccount.value = cfg.webdavAccount || "";
  if (elements.cloudWebdavPassword) elements.cloudWebdavPassword.value = "";
  toggleCloudFields();
}

function toggleCloudFields() {
  const platform = elements.cloudPlatform?.value || "gitee";
  const isWebdav = platform === "webdav";
  document.querySelectorAll(".cloud-field-token, .cloud-field-owner, .cloud-field-repo, .cloud-field-branch").forEach((el) => {
    el.style.display = isWebdav ? "none" : "";
  });
  document.querySelectorAll(".cloud-field-webdav-url, .cloud-field-webdav-account, .cloud-field-webdav-password").forEach((el) => {
    el.style.display = isWebdav ? "" : "none";
  });
}

function getApiBase() {
  const platform = elements.cloudPlatform?.value || state.meta.cloudBackup?.platform || "gitee";
  if (platform === "github") return "https://api.github.com";
  if (platform === "webdav") return (elements.cloudWebdavUrl?.value || state.meta.cloudBackup?.webdavUrl || "https://dav.jianguoyun.com/dav/").replace(/\/+$/, "");
  return "https://gitee.com/api/v5";
}

function cloudBackupAvailable() {
  const config = getCloudConfig();
  if (config.platform === "webdav") {
    return !!(config.webdavUrl && config.webdavAccount);
  }
  return !!(config.owner && config.repo);
}

async function testCloudConnection() {
  const config = getCloudConfig();
  const token = (elements.cloudToken?.value || "").trim();

  if (config.platform === "webdav") {
    if (!config.webdavAccount) {
      showCloudStatus("error", "请填写坚果云账号和应用密码。");
      return;
    }
    saveCloudConfig(config);
    try {
      const apiBase = getApiBase();
      const response = await fetch(apiBase, {
        method: "PROPFIND",
        headers: {
          "Authorization": "Basic " + btoa(`${config.webdavAccount}:${config.webdavPassword}`),
          "Depth": "0"
        }
      });
      if (response.ok) {
        showCloudStatus("success", `WebDAV 连接成功！地址：${apiBase}`);
      } else if (response.status === 401 || response.status === 403) {
        showCloudStatus("error", "认证失败。请检查账号和应用密码是否正确。注意：应用密码不是登录密码，需要在坚果云安全设置中单独生成。");
      } else {
        showCloudStatus("error", `连接失败（${response.status}）。请确认 WebDAV 地址正确。`);
      }
    } catch (err) {
      showCloudStatus("error", `WebDAV 连接错误：${err.message}。坚果云可能不允许浏览器直接访问，建议使用 Gitee。`);
    }
    return;
  }

  if (!config.owner || !config.repo) {
    showCloudStatus("error", "请先填写仓库所有者和仓库名。");
    return;
  }
  if (!token) {
    showCloudStatus("error", "请先填写 Personal Access Token。");
    return;
  }

  saveCloudConfig(config);

  try {
    const apiBase = getApiBase();
    const isGithub = config.platform === "github";
    const url = isGithub
      ? `${apiBase}/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}`
      : `${apiBase}/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}?access_token=${encodeURIComponent(token)}`;

    const headers = {};
    if (isGithub) {
      headers["Authorization"] = `token ${token}`;
      headers["Accept"] = "application/vnd.github.v3+json";
    }

    const response = await fetch(url, { headers });
    if (response.ok) {
      const data = await response.json();
      showCloudStatus("success", `连接成功！仓库：${data.full_name || config.owner + "/" + config.repo}，默认分支：${data.default_branch || "—"}`);
      if (data.default_branch && data.default_branch !== config.branch) {
        elements.cloudBranch.value = data.default_branch;
        saveCloudConfig(getCloudConfig());
      }
    } else if (response.status === 404) {
      showCloudStatus("error", "仓库不存在。请先在 GitHub/Gitee 上创建仓库，并确认 Token 有访问权限。");
    } else if (response.status === 401) {
      showCloudStatus("error", "Token 无效或已过期。请重新生成。");
    } else {
      const body = await response.text();
      showCloudStatus("error", `连接失败（${response.status}）：${body.slice(0, 200)}`);
    }
  } catch (err) {
    showCloudStatus("error", `网络错误：${err.message}。如果使用 Gitee，请确认浏览器未阻止跨域请求。`);
  }
}

async function backupToCloud(silent) {
  const config = getCloudConfig();
  const token = (elements.cloudToken?.value || "").trim();

  if (!cloudBackupAvailable()) {
    if (!silent) showCloudStatus("error", "请先配置云备份并测试连接成功。");
    return false;
  }

  // WebDAV (坚果云) backup
  if (config.platform === "webdav") {
    try {
      const apiBase = getApiBase();
      const dateStr = new Date().toISOString().slice(0, 10);
      const fileName = `backup-${dateStr}.json`;
      const backupContent = JSON.stringify(state, null, 2);

      // Ensure backups directory exists
      const mkcolUrl = `${apiBase}/backups`;
      await fetch(mkcolUrl, {
        method: "MKCOL",
        headers: { "Authorization": "Basic " + btoa(`${config.webdavAccount}:${config.webdavPassword}`) }
      }).catch(() => {}); // Ignore if already exists

      const url = `${apiBase}/backups/${fileName}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Authorization": "Basic " + btoa(`${config.webdavAccount}:${config.webdavPassword}`),
          "Content-Type": "application/json;charset=utf-8"
        },
        body: backupContent
      });

      if (response.ok || response.status === 201 || response.status === 204) {
        state.meta.lastCloudBackupAt = new Date().toISOString();
        saveState();
        if (!silent) {
          showCloudStatus("success", `坚果云备份成功！文件：backups/${fileName}，记录数：${state.deliveries.length} 条进货 + ${state.payments.length} 条收款。`);
        }
        return true;
      } else {
        if (!silent) showCloudStatus("error", `坚果云备份失败（${response.status}）。请确认 WebDAV 地址和应用密码正确。`);
        return false;
      }
    } catch (err) {
      if (!silent) showCloudStatus("error", `坚果云错误：${err.message}。浏览器可能阻止了跨域请求，可尝试 Gitee 方案。`);
      return false;
    }
  }

  // GitHub / Gitee backup
  if (!token) {
    if (!silent) showCloudStatus("error", "请填写 Personal Access Token。");
    return false;
  }

  saveCloudConfig(config);

  try {
    const apiBase = getApiBase();
    const isGithub = config.platform === "github";
    const dateStr = new Date().toISOString().slice(0, 10);
    const fileName = `backup-${dateStr}.json`;

    const backupContent = JSON.stringify(state, null, 2);
    const base64Content = btoa(unescape(encodeURIComponent(backupContent)));

    const url = isGithub
      ? `${apiBase}/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/contents/backups/${fileName}`
      : `${apiBase}/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/contents/backups/${fileName}`;

    const commitMessage = `备份 ${dateStr} — ${state.deliveries.length} 条进货, ${state.payments.length} 条收款`;

    const body = {
      message: commitMessage,
      content: base64Content,
      branch: config.branch
    };

    if (isGithub) {
      body["committer"] = { name: "KnitFactorySystem", email: "backup@knit-factory.local" };
    } else {
      body["access_token"] = token;
    }

    const headers = { "Content-Type": "application/json" };
    if (isGithub) {
      headers["Authorization"] = `token ${token}`;
      headers["Accept"] = "application/vnd.github.v3+json";
    }

    const response = await fetch(url, { method: "PUT", headers, body: JSON.stringify(body) });
    const result = await response.json();

    if (response.ok || response.status === 201) {
      state.meta.lastCloudBackupAt = new Date().toISOString();
      saveState();
      if (!silent) {
        showCloudStatus("success", `云端备份成功！文件：backups/${fileName}，记录数：${state.deliveries.length} 条进货 + ${state.payments.length} 条收款。`);
      }
      return true;
    } else if (response.status === 422 && result.message?.includes("sha")) {
      if (!silent) showCloudStatus("error", "同名备份文件已存在。今天已经备份过了，如需覆盖请明天再试或手动删除远程文件。");
      return false;
    } else {
      if (!silent) showCloudStatus("error", `备份失败（${response.status}）：${(result.message || JSON.stringify(result)).slice(0, 300)}`);
      return false;
    }
  } catch (err) {
    if (!silent) showCloudStatus("error", `备份网络错误：${err.message}`);
    return false;
  }
}

async function restoreFromCloud() {
  const config = getCloudConfig();
  const token = (elements.cloudToken?.value || "").trim();

  if (!config.owner || !config.repo || !token) {
    showCloudStatus("error", "请先配置云备份并测试连接成功。");
    return;
  }

  saveCloudConfig(config);

  try {
    const apiBase = getApiBase();
    const isGithub = config.platform === "github";
    const url = isGithub
      ? `${apiBase}/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/contents/backups?ref=${encodeURIComponent(config.branch)}`
      : `${apiBase}/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/contents/backups?access_token=${encodeURIComponent(token)}&ref=${encodeURIComponent(config.branch)}`;

    const headers = {};
    if (isGithub) {
      headers["Authorization"] = `token ${token}`;
      headers["Accept"] = "application/vnd.github.v3+json";
    }

    const response = await fetch(url, { headers });
    if (!response.ok) {
      const body = await response.text();
      showCloudStatus("error", `获取备份列表失败（${response.status}）：${body.slice(0, 200)}`);
      return;
    }

    const files = await response.json();
    if (!Array.isArray(files) || !files.length) {
      showCloudStatus("info", "云端暂无备份文件。请先执行一次备份。");
      return;
    }

    const listItems = files
      .filter((f) => f.name?.endsWith(".json"))
      .sort((a, b) => (b.name || "").localeCompare(a.name || ""))
      .slice(0, 20)
      .map((f) => `
        <button class="button button-secondary cloud-restore-item" type="button" data-url="${escapeHtml(f.url || f.download_url || "")}" data-name="${escapeHtml(f.name || "")}">
          ${escapeHtml(f.name || "")} — ${escapeHtml(new Date(f.created_at || "").toLocaleString("zh-CN"))}
        </button>
      `).join("");

    elements.cloudRestoreList.innerHTML = `
      <p style="font-weight:800;margin:0 0 8px;">选择要恢复的备份（按时间倒序）：</p>
      ${listItems}
    `;
    elements.cloudRestoreList.style.display = "block";
    showCloudStatus("info", `找到 ${files.filter((f) => f.name?.endsWith(".json")).length} 个备份文件。请点击选择要恢复的版本。`);
  } catch (err) {
    showCloudStatus("error", `获取备份列表错误：${err.message}`);
  }
}

async function handleCloudRestoreClick(event) {
  const button = event.target.closest(".cloud-restore-item");
  if (!button) return;

  const fileName = button.dataset.name;
  const fileUrl = button.dataset.url;
  const config = getCloudConfig();
  const token = (elements.cloudToken?.value || "").trim();
  const isGithub = config.platform === "github";

  if (!confirm(`确定要用 "${fileName}" 覆盖当前所有数据吗？当前数据将被替换。`)) return;

  try {
    const headers = {};
    if (isGithub) {
      headers["Authorization"] = `token ${token}`;
      headers["Accept"] = "application/vnd.github.v3+json";
    }

    const fetchUrl = isGithub ? fileUrl : `${fileUrl}?access_token=${encodeURIComponent(token)}`;
    const response = await fetch(fetchUrl, { headers });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const fileData = await response.json();
    const content = fileData.content
      ? JSON.parse(atob(fileData.content.replace(/\s/g, "")))
      : await (await fetch(fileData.download_url)).json();

    const imported = normalizeState(content);
    if (!imported.deliveries.length && !imported.payments.length) {
      alert("备份文件为空或格式不正确。");
      return;
    }

    state.deliveries = imported.deliveries;
    state.payments = imported.payments;
    state.meta = imported.meta;
    state.meta.cloudBackup = config;
    state.meta.restoredFrom = fileName;
    state.meta.restoredAt = new Date().toISOString();
    saveState();
    clearFilters();
    render();
    elements.cloudRestoreList.style.display = "none";
    showCloudStatus("success", `已从 "${fileName}" 恢复：${state.deliveries.length} 条进货，${state.payments.length} 条收款。`);
  } catch (err) {
    showCloudStatus("error", `恢复失败：${err.message}`);
  }
}

function showCloudStatus(type, message) {
  if (!elements.cloudStatus) return;
  elements.cloudStatus.style.display = "block";
  elements.cloudStatus.className = `cloud-status cloud-status-${type}`;
  elements.cloudStatus.textContent = message;
}

function renderCloudStatus() {
  if (!elements.cloudStatus) return;
  const cfg = state.meta.cloudBackup || {};
  const lastCloud = state.meta.lastCloudBackupAt;

  if (lastCloud) {
    const daysSinceCloud = daysSince(lastCloud);
    const text = daysSinceCloud === 0
      ? "上次云端备份：今天"
      : `上次云端备份：${daysSinceCloud} 天前（${new Date(lastCloud).toLocaleString("zh-CN")}）`;
    elements.cloudStatus.style.display = "block";
    elements.cloudStatus.className = "cloud-status cloud-status-info";
    elements.cloudStatus.textContent = text;
  }
}

/* ================================================================
   End Cloud Backup
   ================================================================ */

/* ================================================================
   Voice Input — Web Speech API
   ================================================================ */

let voiceRecognition = null;
let voiceActiveField = null;
let voiceFailCount = 0;

function initVoiceRecognition() {
  console.log("[Voice] Initializing speech recognition...");
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn("[Voice] SpeechRecognition not available in this browser");
    if (elements.globalVoiceButton) {
      elements.globalVoiceButton.style.opacity = "0.45";
      elements.globalVoiceButton.title = "语音不可用：请使用 Chrome 或 Edge 浏览器";
      elements.globalVoiceButton.textContent = "🎤 浏览器不支持";
    }
    return;
  }
  voiceRecognition = new SpeechRecognition();
  voiceRecognition.lang = "zh-CN";
  voiceRecognition.interimResults = false;
  voiceRecognition.continuous = false;
  voiceRecognition.maxAlternatives = 1;

  voiceRecognition.onresult = (event) => {
    console.log("[Voice] Result received:", event.results[0][0].transcript);
    voiceFailCount = 0;
    const text = event.results[0][0].transcript.trim();
    if (voiceActiveField && document.activeElement === voiceActiveField) {
      voiceActiveField.value = text;
      voiceActiveField.dispatchEvent(new Event("input", { bubbles: true }));
    }
    stopVoiceListening();
  };

  voiceRecognition.onerror = (event) => {
    console.error("[Voice] Error:", event.error, event.message);
    stopVoiceListening();
    voiceFailCount += 1;
    if (event.error === "not-allowed") {
      alert("🎤 麦克风权限被拒绝。\n\n请在浏览器地址栏左侧点击锁图标 → 将麦克风设为\"允许\"。");
    } else if (event.error === "network") {
      if (voiceFailCount === 1) {
        alert("🎤 Chrome 语音识别依赖 Google 服务器，在国内可能被屏蔽。\n\n建议：用 Microsoft Edge 浏览器打开（Edge 用 Azure 服务器，国内可用）。");
      } else {
        alert("语音识别仍然无法连接，请换用 Edge 浏览器试试。");
      }
    } else if (event.error === "no-speech") {
      alert("🎤 未检测到语音。\n\n请确认麦克风已开启，并靠近麦克风说话。");
    } else if (event.error === "aborted") {
      // User aborted — no message needed
    } else {
      alert("语音识别出错：" + event.error);
    }
  };

  voiceRecognition.onend = () => {
    console.log("[Voice] Recognition ended");
    stopVoiceListening();
  };

  console.log("[Voice] SpeechRecognition initialized successfully");
}

function startVoiceListening() {
  console.log("[Voice] Button clicked");

  if (!voiceRecognition) {
    console.warn("[Voice] voiceRecognition is null");
    alert("🎤 当前浏览器不支持语音识别。\n\n请使用 Chrome 或 Edge 浏览器打开本页面。");
    return;
  }

  if (window.location.protocol === "file:") {
    alert("🎤 语音识别在 file:// 协议下不可用。\n\n请通过网址访问（GitHub Pages 或 localhost）。");
    return;
  }

  const active = document.activeElement;
  console.log("[Voice] Active element:", active?.tagName, active?.type, active?.matches("input:not([type=hidden]), textarea"));
  if (!active || !active.matches("input:not([type=hidden]), textarea")) {
    alert("🎤 请先点击要填入文字的输入框，再点语音按钮。");
    return;
  }

  voiceActiveField = active;
  elements.globalVoiceButton.classList.add("is-listening");
  elements.globalVoiceButton.textContent = "🔴 正在听...";
  console.log("[Voice] Starting recognition...");

  try {
    voiceRecognition.start();
    console.log("[Voice] recognition.start() succeeded");
  } catch (err) {
    console.error("[Voice] start() threw:", err);
    stopVoiceListening();
    alert("🎤 语音启动失败：" + err.message + "\n\n请换用 Microsoft Edge 浏览器试试。");
  }
}

function stopVoiceListening() {
  console.log("[Voice] Stopping");
  voiceActiveField = null;
  if (elements.globalVoiceButton) {
    elements.globalVoiceButton.classList.remove("is-listening");
    elements.globalVoiceButton.textContent = "🎤 语音录入";
  }
  try { voiceRecognition?.abort(); } catch (e) { /* ignore */ }
}

/* ================================================================
   AI Analysis
   ================================================================ */

const AI_DEFAULTS = {
  deepseek: { url: "https://api.deepseek.com/v1", model: "deepseek-chat" },
  qwen: { url: "https://dashscope.aliyuncs.com/compatible-mode/v1", model: "qwen-plus" },
  glm: { url: "https://open.bigmodel.cn/api/paas/v4", model: "glm-4-flash" },
  custom: { url: "", model: "" }
};

function getAiConfig() {
  const provider = elements.aiProvider?.value || "deepseek";
  const apiKey = (elements.aiApiKey?.value || "").trim();
  const model = (elements.aiModel?.value || "").trim() || AI_DEFAULTS[provider]?.model || "deepseek-chat";
  let url = provider === "custom"
    ? (elements.aiCustomUrl?.value || "").trim()
    : AI_DEFAULTS[provider]?.url || "";
  return { provider, apiKey, model, url };
}

function loadAiConfig() {
  const cfg = state.meta.aiConfig || {};
  if (elements.aiProvider) elements.aiProvider.value = cfg.provider || "deepseek";
  if (elements.aiApiKey) elements.aiApiKey.value = "";
  if (elements.aiModel) elements.aiModel.value = cfg.model || "deepseek-chat";
  if (elements.aiCustomUrl) elements.aiCustomUrl.value = cfg.url || "";
  toggleAiFields();
}

function saveAiConfig() {
  const config = getAiConfig();
  if (!config.apiKey) {
    alert("请填写 API Key。");
    return;
  }
  state.meta.aiConfig = { provider: config.provider, model: config.model, url: config.url };
  saveState();
  showAiStatus("success", "AI 配置已保存（API Key 仅本次会话有效，未写入 localStorage）。");
}

function toggleAiFields() {
  const provider = elements.aiProvider?.value || "deepseek";
  const isCustom = provider === "custom";
  if (elements.aiCustomUrlLabel) elements.aiCustomUrlLabel.style.display = isCustom ? "" : "none";
  if (elements.aiModel) {
    elements.aiModel.value = AI_DEFAULTS[provider]?.model || "";
  }
}

function showAiStatus(type, message) {
  if (!elements.aiStatus) return;
  elements.aiStatus.style.display = "block";
  elements.aiStatus.style.color = type === "error" ? "var(--danger)" : "var(--accent-strong)";
  elements.aiStatus.textContent = message;
}

async function callAiApi(prompt) {
  const config = getAiConfig();
  if (!config.apiKey) {
    showAiStatus("error", "请先配置 AI API Key。");
    return null;
  }
  if (!config.url) {
    showAiStatus("error", "请填写 API 地址。");
    return null;
  }

  elements.aiOutput.innerHTML = `<p class="subtle">⏳ AI 分析中，请稍候…</p>`;
  showAiStatus("info", "正在调用 " + config.provider + "…");

  try {
    const endpoint = config.url.replace(/\/+$/, "") + "/chat/completions";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          { role: "system", content: "你是针织加工厂的数据分析助手。用简洁的中文回答，给出可操作的结论。使用数字说话。不要虚构数据。" },
          { role: "user", content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 2000
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || `HTTP ${response.status}`);
    }

    const reply = data.choices?.[0]?.message?.content || "AI 未返回有效内容。";
    elements.aiOutput.innerHTML = `<div class="ai-result">${markedText(reply)}</div>`;
    showAiStatus("success", `分析完成 — 模型：${config.model}`);
    return reply;
  } catch (err) {
    elements.aiOutput.innerHTML = `<p style="color:var(--danger)">分析失败：${err.message}</p>`;
    showAiStatus("error", `调用失败：${err.message}`);
    return null;
  }
}

function markedText(text) {
  return String(text)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")
    .replace(/\n/g, "<br>");
}

function buildDataSummary() {
  const totalDeliveries = state.deliveries.length;
  const totalGoods = sumDeliveryAmount(state.deliveries);
  const totalQuantity = sumQuantity(state.deliveries);
  const vendorNames = [...new Set(state.deliveries.map((d) => d.vendor))].sort((a, b) => a.localeCompare(b, "zh-CN"));

  const vendorData = vendorNames.map((vendor) => {
    const dl = state.deliveries.filter((d) => d.vendor === vendor);
    const pm = state.payments.filter((p) => p.vendor === vendor);
    const goods = sumDeliveryAmount(dl);
    const paid = sumPaymentAmount(pm);
    return `${vendor}：${dl.length}笔进货，${sumQuantity(dl)}件，货款¥${goods.toFixed(2)}，已收¥${paid.toFixed(2)}，余额¥${(goods - paid).toFixed(2)}`;
  }).join("；\n");

  const itemData = [...groupBy(state.deliveries, (d) => `${d.itemNo}|||${d.color}`).entries()]
    .map(([key, list]) => {
      const [itemNo, color] = key.split("|||");
      const prices = list.map((d) => d.unitPrice);
      return `${itemNo} ${color}：${list.length}笔，¥${sumDeliveryAmount(list).toFixed(2)}，均价¥${(sumDeliveryAmount(list) / sumQuantity(list)).toFixed(2)}，价差¥${(Math.max(...prices) - Math.min(...prices)).toFixed(2)}`;
    }).join("；\n");

  const unreconciled = state.deliveries.filter((d) => d.reconcileStatus !== "已对账").length;
  const samplesTotal = state.samples.length;
  const samplesConfirmed = state.samples.filter((s) => s.status === "已确认").length;

  return `针织加工厂当前数据总览：
---
进货总记录：${totalDeliveries} 笔，${totalQuantity} 件，总货款 ¥${totalGoods.toFixed(2)}
厂家数：${vendorNames.length}（${vendorNames.join("、")}）
未对账笔数：${unreconciled} / ${totalDeliveries}
打版总数：${samplesTotal}，已确认：${samplesConfirmed}
---
各厂家详情：
${vendorData}
---
各款号详情：
${itemData}`;
}

async function analyzeVendors() {
  const summary = buildDataSummary();
  const prompt = `请分析以下针织加工厂数据，重点回答：
1. 哪个厂家货款最高？是否有集中风险？
2. 哪个厂家未付余额最大？需要优先催收吗？
3. 哪个厂家价格最稳定（价差最小）？哪个波动大？
4. 各厂家的对账进度如何？
5. 给出 2-3 条具体的经营建议。

数据如下：
${summary}`;
  await callAiApi(prompt);
}

async function analyzeItems() {
  const summary = buildDataSummary();
  const prompt = `请分析以下针织加工厂数据，重点回答：
1. 哪个款号总货款最高？是否为利润主力？
2. 哪个款号价格波动最大？可能的原因？
3. 同一款号不同厂家之间，谁的报价更有优势？
4. 颜色维度有什么规律？哪个颜色最畅销？
5. 打版转化情况如何？打版后是否都投产了？
6. 给出 2-3 条关于款号策略的建议。

数据如下：
${summary}`;
  await callAiApi(prompt);
}

/* ================================================================
   End AI Analysis
   ================================================================ */

function downloadCsv(filename, headers, rows) {
  const csv = [headers, ...rows].map((row) => row.map(escapeCsv).join(",")).join("\n");
  downloadFile(filename, `\uFEFF${csv}`, "text/csv;charset=utf-8");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

async function importFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const fileName = file.name.toLowerCase();

    if (fileName.endsWith(".xlsx")) {
      await importFromExcel(file);
    } else if (fileName.endsWith(".json")) {
      await importFromJson(file);
    } else {
      await importFromCsv(file);
    }

    saveState();
    clearFilters();
    resetDeliveryForm();
    resetPaymentForm();
    render();
  } catch (error) {
    alert(`导入失败：${error.message}`);
  } finally {
    elements.importFileInput.value = "";
  }
}

async function importFromJson(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);
  const imported = Array.isArray(parsed) ? normalizeState({ deliveries: parsed, payments: [] }) : normalizeState(parsed);
  if (!imported.deliveries.length && !imported.payments.length) {
    throw new Error("没有读到有效数据。JSON 中未找到进货或收款记录。");
  }
  if (!confirm(`读到 ${imported.deliveries.length} 条进货、${imported.payments.length} 条收款。是否覆盖当前数据？`)) throw new Error("已取消导入");
  state.deliveries = imported.deliveries;
  state.payments = imported.payments;
  state.meta = imported.meta;
}

async function importFromCsv(file) {
  const text = await file.text();
  const deliveries = parseCsv(text).map(normalizeDelivery).filter(Boolean);
  if (!deliveries.length) {
    throw new Error("没有读到有效进货记录。CSV 至少需要包含厂家、日期、款号、颜色、单价、数量。");
  }
  if (!confirm(`读到 ${deliveries.length} 条进货记录。是否覆盖当前进货数据？收款记录会保留。`)) throw new Error("已取消导入");
  state.deliveries = deliveries;
}

async function importFromExcel(file) {
  if (typeof XLSX === "undefined") {
    throw new Error("Excel 导入需要 SheetJS 库。请确认网络连接正常以加载 CDN 资源，或使用 CSV 格式导入。");
  }

  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(new Uint8Array(buffer), { type: "array" });
  const deliveries = [];
  const payments = [];

  const headerMap = {
    "厂家": "vendor", "厂商": "vendor",
    "日期": "date", "进货日期": "date", "收款日期": "date",
    "款号": "itemNo", "货号": "itemNo",
    "颜色": "color",
    "单价": "unitPrice", "单件价格": "unitPrice",
    "数量": "quantity",
    "金额": "amount", "收款金额": "amount",
    "对账状态": "reconcileStatus",
    "批次": "batchNo", "单号": "batchNo",
    "备注": "note",
    "收款方式": "method", "方式": "method"
  };

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
    if (!rows.length) continue;

    const headerRow = rows[0].map((cell) => String(cell ?? "").trim());
    const mappedHeaders = headerRow.map((header) => headerMap[header] || header);

    for (let index = 1; index < rows.length; index += 1) {
      const row = rows[index];
      if (!row || row.every((cell) => !String(cell ?? "").trim())) continue;

      const record = {};
      mappedHeaders.forEach((field, colIndex) => {
        record[field] = String(row[colIndex] ?? "").trim();
      });

      if (record.amount) {
        const payment = normalizePayment(record);
        if (payment) payments.push(payment);
      }

      if (record.itemNo && record.unitPrice && record.quantity) {
        const delivery = normalizeDelivery(record);
        if (delivery) deliveries.push(delivery);
      }
    }
  }

  if (!deliveries.length && !payments.length) {
    throw new Error(`从 ${workbook.SheetNames.length} 个工作表中未读到有效的进货或收款记录。请确认 Excel 表头包含：厂家、日期、款号、颜色、单价、数量。`);
  }

  const messageParts = [];
  if (deliveries.length) messageParts.push(`${deliveries.length} 条进货`);
  if (payments.length) messageParts.push(`${payments.length} 条收款`);
  const message = `从 Excel 读到 ${messageParts.join("、")}。`;

  if (payments.length && deliveries.length) {
    if (!confirm(`${message}是否覆盖当前全部数据？`)) throw new Error("已取消导入");
    state.deliveries = deliveries;
    state.payments = payments;
  } else if (deliveries.length) {
    if (!confirm(`${message}是否覆盖当前进货数据？收款记录会保留。`)) throw new Error("已取消导入");
    state.deliveries = deliveries;
  } else {
    if (!confirm(`${message}是否覆盖当前收款数据？进货记录会保留。`)) throw new Error("已取消导入");
    state.payments = payments;
  }
}

function parseCsv(text) {
  const rows = [];
  let current = "";
  let row = [];
  let quoted = false;
  const cleanText = text.replace(/^\uFEFF/, "");

  for (let index = 0; index < cleanText.length; index += 1) {
    const char = cleanText[index];
    const next = cleanText[index + 1];

    if (char === "\"" && quoted && next === "\"") {
      current += "\"";
      index += 1;
    } else if (char === "\"") {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(current);
      current = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(current);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  row.push(current);
  if (row.some((cell) => cell.trim())) rows.push(row);

  const [headers, ...body] = rows;
  if (!headers) return [];
  const normalizedHeaders = headers.map((header) => mapHeader(header.trim()));

  return body.map((cells) => {
    const record = {};
    normalizedHeaders.forEach((header, index) => {
      record[header] = cells[index]?.trim() ?? "";
    });
    return record;
  });
}

function mapHeader(header) {
  const dictionary = {
    "厂家": "vendor",
    "厂商": "vendor",
    "日期": "date",
    "进货日期": "date",
    "款号": "itemNo",
    "货号": "itemNo",
    "颜色": "color",
    "单价": "unitPrice",
    "单件价格": "unitPrice",
    "数量": "quantity",
    "总价": "total",
    "总金额": "total",
    "对账状态": "reconcileStatus",
    "批次": "batchNo",
    "单号": "batchNo",
    "备注": "note"
  };
  return dictionary[header] ?? header;
}

function escapeCsv(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll("\"", "\"\"")}"` : text;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function applyActiveView() {
  elements.navItems.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === activeView);
  });
  elements.views.forEach((view) => {
    view.classList.toggle("is-active", view.id === `view-${activeView}`);
    if (view.id === `view-${activeView}`) {
      elements.pageTitle.textContent = view.dataset.title || "总览";
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindEvents() {
  elements.navItems.forEach((button) => {
    button.addEventListener("click", () => {
      activeView = button.dataset.view;
      applyActiveView();
    });
  });

  [elements.dateFrom, elements.dateTo, elements.vendorFilter, elements.keywordFilter]
    .forEach((element) => element.addEventListener("input", render));

  [elements.unitPriceInput, elements.quantityInput]
    .forEach((element) => element.addEventListener("input", updateDeliveryFormTotal));

  elements.deliveryForm.addEventListener("submit", handleDeliverySubmit);
  elements.paymentForm.addEventListener("submit", handlePaymentSubmit);
  elements.resetDeliveryFormButton.addEventListener("click", resetDeliveryForm);
  elements.resetPaymentFormButton.addEventListener("click", resetPaymentForm);
  elements.deliveryRecordsBody.addEventListener("click", handleDeliveryAction);
  elements.paymentRecordsBody.addEventListener("click", handlePaymentAction);
  elements.vendorSummaryBody.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-vendor]");
    if (!button) return;
    elements.vendorFilter.value = button.dataset.vendor;
    activeView = "dashboard";
    applyActiveView();
    render();
  });

  elements.clearFiltersButton.addEventListener("click", clearFilters);
  elements.markFilteredReconciledButton.addEventListener("click", markFilteredReconciled);
  elements.clearDeliveryButton.addEventListener("click", clearDeliveries);
  elements.clearPaymentButton.addEventListener("click", clearPayments);
  elements.sampleForm?.addEventListener("submit", handleSampleSubmit);
  elements.resetSampleFormButton?.addEventListener("click", resetSampleForm);
  elements.sampleRecordsBody?.addEventListener("click", handleSampleAction);
  elements.clearSamplesButton?.addEventListener("click", clearSamples);
  elements.exportJsonButton.addEventListener("click", exportJson);
  elements.exportAllJsonButton.addEventListener("click", exportJson);
  elements.exportDeliveryCsvButton.addEventListener("click", exportDeliveryCsv);
  elements.exportPaymentsCsvButton?.addEventListener("click", exportPaymentsCsv);
  elements.exportDeliveryCsvButton2?.addEventListener("click", exportDeliveryCsv);
  elements.exportPaymentsCsvButton2?.addEventListener("click", exportPaymentsCsv);
  elements.printVendorStatementButton?.addEventListener("click", printVendorStatement);
  elements.importFileInput.addEventListener("change", importFile);
  elements.resetSampleButton.addEventListener("click", resetSampleData);
  elements.clearAllDataButton.addEventListener("click", clearAllData);

  // Cloud backup
  elements.cloudPlatform?.addEventListener("change", () => {
    toggleCloudFields();
    saveCloudConfig(getCloudConfig());
  });
  elements.cloudOwner?.addEventListener("input", () => saveCloudConfig(getCloudConfig()));
  elements.cloudRepo?.addEventListener("input", () => saveCloudConfig(getCloudConfig()));
  elements.cloudBranch?.addEventListener("input", () => saveCloudConfig(getCloudConfig()));
  elements.cloudAutoBackup?.addEventListener("change", () => saveCloudConfig(getCloudConfig()));
  elements.testCloudButton?.addEventListener("click", testCloudConnection);
  elements.backupToCloudButton?.addEventListener("click", () => backupToCloud(false));
  elements.restoreFromCloudButton?.addEventListener("click", restoreFromCloud);
  elements.cloudRestoreList?.addEventListener("click", handleCloudRestoreClick);

  // Voice input
  elements.globalVoiceButton?.addEventListener("click", startVoiceListening);
  initVoiceRecognition();

  // AI analysis
  elements.aiProvider?.addEventListener("change", toggleAiFields);
  elements.saveAiConfigButton?.addEventListener("click", saveAiConfig);
  elements.aiAnalyzeVendorsButton?.addEventListener("click", analyzeVendors);
  elements.aiAnalyzeItemsButton?.addEventListener("click", analyzeItems);
}

bindEvents();
resetDeliveryForm();
resetPaymentForm();
resetSampleForm();
loadCloudConfig();
loadAiConfig();
renderCloudStatus();
applyActiveView();
render();

