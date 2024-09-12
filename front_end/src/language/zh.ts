export default {
  header: {
    api: '开发文档',
    cooperation: '合作咨询',
    cooperationMore: '更多合作请咨询',
    cooperationTips: '意见反馈及技术支持群',
    statistics: '数据统计',
    knowledge: '知识库',
    quickStart: '快速开始',
  },
  common: {
    type: 'zh',
    newPlaceholder: '请输入知识库名称',
    new: '新建',
    manage: '管理',
    rename: '重命名',
    renameSucceeded: '重命名成功',
    renameFailed: '重命名失败',
    delete: '删除',
    view: '预览',
    regenerate: '重新生成',
    dragUrl: '将文件拖到此处，或',
    click: '点击上传',
    close: '关闭',
    updesc1:
      '支持文件格式md、txt、pdf、jpg、png、jpeg、docx、xlsx、pptx、eml、csv, 单个文档小于30M, 单张图片小于5M, 文件总大小不得超过125M',
    updesc2:
      '可批量上传，支持文件格式md、txt、pdf、jpg、png、jpeg、docx、xlsx、pptx、eml、csv, 单个文档小于30M, 单张图片小于5M, 文件总大小不得超过125M',
    confirm: '确定',
    confirm2: '确认',
    confirmApplication: '确认应用',
    cancel: '取消',
    addUrl: '添加网址',
    urlPlaceholder: '请输入网址',
    uploading: '上传中',
    inLine: '排队中',
    parsing: '解析中',
    failed: '解析失败',
    succeeded: '解析成功',
    upSucceeded: '上传成功',
    upFailed: '上传失败',
    problemPlaceholder: '请输入问题',
    errTip: '输入内容不能为空',
    uploadFile: '上传文件',
    errorKnowledge: '请输入知识库名称',
    successTip: '删除成功',
    faileTip: '删除失败',
    deleteDec: '确认删除该知识库？删除后无法恢复',
    chooseError: '请至少选择一个知识库',
    saveTip: '是否将会话保存为图片',
    clearTip: '清空会话？',
    stop: '停止',
    errorTip: '注：上传失败的文件不在管理页显示',
    deleteTitle: '确认删除文档吗？',
    dataSource: '数据来源',
    correlation: '相关性:',
    copySuccess: '拷贝成功',
    copyFailed: '拷贝失败',
    copied: '拷贝过',
    copy: '拷贝',
    send: '发送',
    like: '点赞',
    notSupported: '不支持',
    error: '请求失败',
    back: '返回',
    uploadCompleted: '上传完成',
    learningCompleted: '学习完成',
    privatization: '私有化',
    openPrivatization: '开启私有化模型',
    exitPrivatization: '退出私有化模型',
    modelSettingTitle: '模型配置',
    networkSearch: '联网检索',
    networkSearchDescription: '接入互联网，会在需要时通过互联网搜集资料',
    mixedSearch: '混合检索',
    mixedSearchDescription: '使用向量检索与全文检索的综合结果返回',
    onlySearch: '仅检索模式',
    onlySearchDescription: '此模式不会返回说明文字',
    rerank: '检索增强',
    rerankDescription: '开启二阶段检索（rerank），会大幅增加检索耗时',
    chatUpload: '上传文件',
    chatUploadNoKbId: '请先创建对话',
    chatToPic: '将会话保存为图片',
    clearChat: '清空会话',
    modelProviderLabel: '模型提供方',
    selectModel: '请选择你的模型',
    customModelType: '自定义模型配置',
    modelNameLabel: '自定义模型名称',
    apiKeyLabel: 'API密钥',
    apiBaseLabel: 'API路径',
    apiModelNameLabel: '模型名称',
    apiContextLengthLabel: '总Token数量',
    apiContextLengthLabelDescription: 'LLM输入和输出的总token数量上限',
    // apiContextLengthOllamaBefore: '您需要先【手动修改模型配置】',
    // apiContextLengthOllamaAfter: '，然后返回前端进行【总Token数量选择】',
    maxTokenLabel: '输出Token数量',
    maxTokenLabelDescription: 'LLM输出的token数量上限. 最大值为: 总Token数量 / 4',
    chunkSizeLabel: '文本分片大小',
    chunkSizeLabelDescription: '单个文本分片的token数量上限. 最大值为: 总Token数量 / 4',
    contextLabel: '上下文消息数量',
    contextLabelDescription: '单轮对话中保留的历史消息数量上限',
    temperatureLabel: '随机性',
    temperatureLabelDescription: '控制输出的随机性。较低值使输出更确定，较高值增加创意性',
    top_PLabel: '累积概率阈值',
    top_PLabelDescription: '限制词汇选择范围。较低值使输出更聚焦，较高值增加多样性',
    top_KLabel: '检索结果数量上限',
    top_KLabelDescription: '检索算法取所有文档分片里最相关的分片数量上限',
    capabilitiesLabel: '模型能力',
    saveModel: '保存当前自定义模型',
    plsInput: '请输入',
    save: '保存',
    edit: '编辑',
    modelInfoView: '查看所有信息',
    modelInfoTitle: '会话模型信息',
    modelInfoTime: '耗时信息',
    modelInfoToken: 'Token信息',
    modelInfoSetting: '模型信息',
    note: '注',
    searchCompleted: '检索完成',
    searchNotFound: '未找到信息来源',
  },
  home: {
    newConversation: '新建对话窗口',
    newConversationQuick: '开启新对话',
    documentId: '文档ID',
    documentName: '文档名称',
    documentStatus: '文档状态',
    documentStatusNode: '解析成功后可问答',
    fileSize: '文件大小',
    contentLength: '解析后字符数',
    creationDate: '创建日期',
    remark: '备注',
    operate: '操作',
    conversation: '返回对话',
    knowledgeID: '知识库id:',
    upload: '上传文档',
    addUrl: '添加网址',
    homeTitle1: 'QAnything',
    homeTitle2: '知识库问答',
    defaultDec: '构建文档知识库，高效检索文档信息，准确回答专业问题',
    defaultName: '默认知识库',
    startDec: '上传文档 发起提问',
    updesc2: '支持md、txt、pdf、jpg、png、jpeg、docx、xlsx、pptx、eml、csv',
    require1: '可批量上传，单文件不超过20mb/100万字',
    emptyText: '暂无数据',
    inputQa: '录入问答',
    deleteQaSetText: '确认删除？删除后将影响机器人训练结果，不可恢复！',
    docSet: '文档集',
    qaSet: '问答集',
    question: '问题',
    status: '状态',
    characterCount: '字符数',
    plsInputQ: '请输入问题',
    plsInputA: '请输入答案',
    setQPlaceholder: '请输入问题，100字符以内',
    setAPlaceholder: '请输入答案，1000字符以内',
    uploadPictures: '上传图片',
    uploadMax: '(最多上传 3 张)',
    downTemp: '下载模板',
    uploadXlsxDesc: '( 完成填写后再上传，问题总数不超过条500条 )',
    enterQa: '输入问答',
    batchUpload: '批量上传',
    privatizationFormTitle: '私有化体验收集表',
    companyName: '公司名称',
    inputCompanyName: '请输入公司名称',
    yourPosition: '您的职务',
    inputJob: '请输入职务',
    scenarios: '场景及需求',
    scenariosPlaceholder: '描述QAnything的业务应用场景及私有化需求',
    budgetaryExpenses: '预算费用',
    selectBudget: '请选择预算费用',
    inputCannotNull: '输入不能为空',
    clearAllFile: '取消所有文件上传',
    clearAllFileConfirm: '确定取消所有文件的上传吗（所有知识库的上传都取消）',
  },
  bots: {
    myBots: '我的Bots',
    edit: '编辑',
    publish: '发布',
    web: '网页',
    webDesc: '用户在此链接可以直接和您的机器人聊天',
    copyLink: '复制链接',
    previewExperience: '预览体验',
    inputBotName: '请输入Bot名称',
    roleSetting: '角色设定',
    welcomeMessage: '欢迎语',
    save: '保存',
    associatedKb: '关联知识库',
    clickAssociatedKb: '点击添加关联知识库',
    saveSuccessful: '保存成功',
    removalSucessful: '移除成功',
    inputWelcomMsg: '请输入欢迎语',
    createBot: '创建机器人',
    delete: '删除',
    recentlyEdited: '最近编辑',
    deletedSucessfully: '删除成功',
    botsHomeDesc1: '构建文档知识库，高效检索文档信息，准确回答专业问题',
    botsHomeDesc2: '您好，欢迎使用Bots',
    botsHomeDesc3:
      'Bot在知识库基础上增加了人物设定、技能等功能，您可以设置多个独特个性和超强能力的专属助理机器人，还可以一键分享，将您的助理机器人轻松分享到网页、微信服务号等多个渠道！',
    botsHomeDesc4: '马上来创建您的知识库和Bots吧！',
    createBots: '创建Bot',
    multiTurnConversation1: '开启多轮对话',
    multiTurnConversation2: '退出多轮对话',
    bindKbtoPreview: '完成添加关联知识库后即可预览调试',
    downloadSuccessful: '下载成功',
    UrlLink: 'URL链接',
    copy: '复制',
    qrCode: '二维码',
    copySuccessful: '复制成功',
    botName: 'Bot 名称',
    botFunctionIntro: 'Bot 功能介绍',
    preSetBot: '预设机器人',
    creationSuccessful: '创建成功',
    nameCantEmpty: '输入名称不能为空',
    inputName: '请输入名称',
    introBotFunction: '介绍Bot功能',
    selectKb: '选择知识库',
    search: '搜索',
    createKb: '创建知识库',
    noMore: '没有更多了',
    creationTime: '创建时间',
  },
  progress: {
    uploadTotalProgress: '上传总进度',
    putStorage: '成功入库',
    inLine: '排队中',
    parsing: '解析中',
    failure: '失败',
  },
  statistics: {
    export: '导出',
    exportTitle: '确认导出?',
  },
};
