export const CURRENT_DATABASE_TYPE = process.env.REACT_APP_DATABASE_TYPE;

export const STATUS = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  RECORD_NOT_FOUND: "RECORD_NOT_FOUND",
  BAD_REQUEST: "BAD_REQUEST",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  UNAUTHORIZED: "UNAUTHORIZED"
};

export const STORAGE_KEY = {
  USER_ID: "USER_ID",
  USER: "USER",
  ROLE_ACCESS: "roleAccess"
};

export const DATE_FORMAT = "DD-MM-YYYY h:mm:ss A";
export const TIME_FORMAT = "h:mm:ss A";
export const DATEONLY_FORMAT = "DD-MM-YYYY";

export const ACTION_TYPE = {
  DELETE: "DELETE",
  MULTIDELETE: "MULTIDELETE"
};

export const DB_TYPE = {
  MONGODB: "MONGODB",
  SQL: "SQL",
  MYSQL: "MYSQL",
  POSTGRESQL: "POSTGRESQL"
};

export const FILTER_TYPES = {
  CONTAINS: "contains",
  INCLUDES: "includes",
  NOT_INCLUDES: "not includes",
  EQUALS: "equals",
  NOT_EQUALS: "not equals",
  GREATER_THAN: "greater than",
  LESS_THAN: "less than",
  GT_EQUAL_TO: "greater than equal to",
  LT_EQUAL_TO: "less than equal to"
};

export const RELATION_FIELD_ATTRIBUTES = [
  FILTER_TYPES.INCLUDES,
  FILTER_TYPES.NOT_INCLUDES
];

export const INPUT_TYPES = {
  SINGLE_UPLOAD: "SingleUpload",
  MULTI_UPLOAD: "MultiUpload"
};

export const VIEW_MODAL_TYPE = {
  FILE: "file",
  DATA: "data"
};

export const FIXED_LENGTH_INPUT_TYPES = {
  [INPUT_TYPES.SINGLE_UPLOAD]: 70
};
export const MULTIPLIER_INPUT_TYPE = {
  [INPUT_TYPES.MULTI_UPLOAD]: 20
};
export const DEFAULT_LENGTH = 150;
export const MIN_LENGTH = 100;
export const DEFAULT_MULTIPLIER = 13;

export const ACTION_COLUMN_MULTIPLIER = 50;
export const ACTION_COLUMN_DEFAULT = 100;
export const MAPPER = {
  PieChart: "useModelNameList",
  Count: "useModelNameList",
  Table: "useModelNameList"
};
export const COMPONENT_NAME = {
  PieChart: "PieChart",
  Table: "Table",
  Count: "Count"
};
export const DASHBOARD_CLASS = {
  [COMPONENT_NAME.PieChart]: 6,
  [COMPONENT_NAME.Table]: 6,
  [COMPONENT_NAME.Count]: 12
};

export const DATABASE_TYPES = {
  STRING: "String",
  EMAIL: "Email",
  NUMBER: "Number",
  BOOL: "Boolean",
  ARRAY: "Array",
  JSON: "JSON",
  MIXED: "Mixed",
  DATE: "Date",
  BUFFER: "Buffer",
  MAP: "Map",
  OBJECTID: "ObjectId",
  VIRTUAL_RELATION: "virtualRelation",
  SINGLELINE: "SingleLine",
  MULTILINE: "MultiLine",
  URL: "URL",
  DECIMAL: "Decimal",
  PERCENT: "Percentage",
  POINT: "Point"
};

export const FIXED_LENGTH_TYPES = {
  Date: 220,
  Mixed: 120,
  Array: 100,
  JSON: 120,
  Boolean: 100,
  virtualRelation: 120
};

export const MULTIPLIER = {
  String: 10,
  Email: 10,
  Number: 10,
  SingleLine: 13,
  MultiLine: 13,
  URL: 13,
  Decimal: 13,
  Percentage: 13,
  Point: 13
};
export const FILTER_TYPE_ATTRIBUTES = {
  CONTAINS: [
    DATABASE_TYPES.STRING,
    DATABASE_TYPES.EMAIL,
    DATABASE_TYPES.SINGLELINE,
    DATABASE_TYPES.MULTILINE
  ],
  INCLUDES: [
    DATABASE_TYPES.OBJECTID,
    DATABASE_TYPES.STRING,
    DATABASE_TYPES.EMAIL,
    DATABASE_TYPES.URL
  ],
  NOT_INCLUDES: [
    DATABASE_TYPES.OBJECTID,
    DATABASE_TYPES.STRING,
    DATABASE_TYPES.EMAIL,
    DATABASE_TYPES.URL
  ],
  EQUALS: [
    DATABASE_TYPES.STRING,
    DATABASE_TYPES.EMAIL,
    DATABASE_TYPES.NUMBER,
    DATABASE_TYPES.BOOL,
    DATABASE_TYPES.DATE,
    DATABASE_TYPES.URL,
    DATABASE_TYPES.DECIMAL,
    DATABASE_TYPES.PERCENT,
    DATABASE_TYPES.POINT
  ],
  NOT_EQUALS: [
    DATABASE_TYPES.STRING,
    DATABASE_TYPES.EMAIL,
    DATABASE_TYPES.NUMBER,
    DATABASE_TYPES.BOOL,
    DATABASE_TYPES.DATE,
    DATABASE_TYPES.URL,
    DATABASE_TYPES.DECIMAL,
    DATABASE_TYPES.PERCENT,
    DATABASE_TYPES.POINT
  ],
  GREATER_THAN: [
    DATABASE_TYPES.NUMBER,
    DATABASE_TYPES.DATE,
    DATABASE_TYPES.DECIMAL,
    DATABASE_TYPES.PERCENT,
    DATABASE_TYPES.POINT
  ],
  LESS_THAN: [
    DATABASE_TYPES.NUMBER,
    DATABASE_TYPES.DATE,
    DATABASE_TYPES.DECIMAL,
    DATABASE_TYPES.PERCENT,
    DATABASE_TYPES.POINT
  ],
  GT_EQUAL_TO: [
    DATABASE_TYPES.NUMBER,
    DATABASE_TYPES.DATE,
    DATABASE_TYPES.DECIMAL,
    DATABASE_TYPES.PERCENT,
    DATABASE_TYPES.POINT
  ],
  LT_EQUAL_TO: [
    DATABASE_TYPES.NUMBER,
    DATABASE_TYPES.DATE,
    DATABASE_TYPES.DECIMAL,
    DATABASE_TYPES.PERCENT,
    DATABASE_TYPES.POINT
  ]
};
export const STRING_TYPES = [
  DATABASE_TYPES.STRING,
  DATABASE_TYPES.EMAIL,
  DATABASE_TYPES.SINGLELINE,
  DATABASE_TYPES.MULTILINE,
  DATABASE_TYPES.URL
];
export const NUMBER_TYPES = [
  DATABASE_TYPES.NUMBER,
  DATABASE_TYPES.DECIMAL,
  DATABASE_TYPES.PERCENT
];
