import { CatchErr, FixMe } from '../util/types';

/* eslint-disable @typescript-eslint/no-explicit-any */
type ProcessorTransformationOutput = {
  version: string;
  type: string;
  method: string;
  endpoint: string;
  userId?: string;
  headers?: Record<string, unknown>;
  params?: Record<string, unknown>;
  body?: {
    JSON?: Record<string, unknown>;
    JSON_ARRAY?: Record<string, unknown>;
    XML?: Record<string, unknown>;
    FORM?: Record<string, unknown>;
  };
  files?: Record<string, unknown>;
};

type ProxyV0Request = {
  version: string;
  type: string;
  method: string;
  endpoint: string;
  userId: string;
  headers?: Record<string, unknown>;
  params?: Record<string, unknown>;
  body?: {
    JSON?: Record<string, unknown>;
    JSON_ARRAY?: Record<string, unknown>;
    XML?: Record<string, unknown>;
    FORM?: Record<string, unknown>;
  };
  files?: Record<string, unknown>;
  metadata: ProxyMetdata;
  destinationConfig: Record<string, unknown>;
};

type ProxyV1Request = {
  version: string;
  type: string;
  method: string;
  endpoint: string;
  userId: string;
  headers?: Record<string, unknown>;
  params?: Record<string, unknown>;
  body?: {
    JSON?: Record<string, unknown>;
    JSON_ARRAY?: Record<string, unknown>;
    XML?: Record<string, unknown>;
    FORM?: Record<string, unknown>;
  };
  files?: Record<string, unknown>;
  metadata: ProxyMetdata[];
  destinationConfig: Record<string, unknown>;
};

type ProxyRequest = ProxyV0Request | ProxyV1Request;

type ProxyMetdata = {
  jobId: number;
  attemptNum: number;
  userId: string;
  sourceId: string;
  destinationId: string;
  workspaceId: string;
  secret: Record<string, unknown>;
  destInfo?: Record<string, unknown>;
  omitempty?: Record<string, unknown>;
  dontBatch: boolean;
};

type Metadata = {
  sourceId: string;
  workspaceId: string;
  namespace: string;
  instanceId: string;
  sourceType: string;
  sourceCategory: string;
  trackingPlanId: string;
  trackingPlanVersion: number;
  sourceTpConfig: object;
  mergedTpConfig: object;
  destinationId: string;
  jobRunId: string;
  jobId: number;
  sourceBatchId: string;
  sourceJobId: string;
  sourceJobRunId: string;
  sourceTaskId: string;
  sourceTaskRunId: string;
  recordId: object;
  destinationType: string;
  messageId: string;
  oauthAccessToken: string;
  messageIds: string[];
  rudderId: string;
  receivedAt: string;
  eventName: string;
  eventType: string;
  sourceDefinitionId: string;
  destinationDefinitionId: string;
  transformationId: string;
  dontBatch?: boolean;
};

type MessageIdMetadataMap = {
  [key: string]: Metadata;
};

type UserTransformationInput = {
  VersionID: string;
  ID: string;
  Config: object;
};

type DestinationDefinition = {
  ID: string;
  Name: string;
  DisplayName: string;
  Config: FixMe;
};

type Destination<DestinationConfig = FixMe> = {
  ID: string;
  Name: string;
  DestinationDefinition: DestinationDefinition;
  Config: DestinationConfig;
  Enabled: boolean;
  WorkspaceID: string;
  Transformations: UserTransformationInput[];
  RevisionID?: string;
  IsProcessorEnabled?: boolean;
  IsConnectionEnabled?: boolean;
};

type Connection = {
  sourceId: string;
  destinationId: string;
  enabled: boolean;
  config: Record<string, unknown>;
  processorEnabled?: boolean;
};

type UserTransformationLibrary = {
  VersionID: string;
};

type Credential = {
  id: string;
  key: string;
  value: string;
  isSecret: boolean;
};

type ProcessorTransformationRequest = {
  request?: object;
  message: object;
  metadata: Metadata;
  destination: Destination;
  connection?: Connection;
  libraries?: UserTransformationLibrary[];
  credentials?: Credential[];
};

type RouterTransformationRequestData<
  Message = object,
  DestinationType = Destination,
  ConnectionType = Connection,
> = {
  request?: object;
  message: Message;
  metadata: Metadata;
  destination: DestinationType;
  connection?: ConnectionType;
};

type RouterTransformationRequest = {
  input: RouterTransformationRequestData[];
  destType: string;
};

type ProcessorTransformationResponse = {
  output?: ProcessorTransformationOutput | RudderMessage;
  metadata: Metadata;
  statusCode: number;
  error?: string;
  statTags?: object;
};

type RouterTransformationResponse = {
  batchedRequest?: ProcessorTransformationOutput | ProcessorTransformationOutput[];
  metadata: Metadata[];
  destination: Destination;
  batched: boolean;
  statusCode: number;
  error?: string;
  statTags?: object;
};

type SourceTransformationEvent = {
  headers?: Record<string, string>;
  query_params?: Record<string, string>;
  [key: string]: any;
};

type SourceTransformationOutput = {
  batch: RudderMessage[];
};

type SourceTransformationResponse = {
  output: SourceTransformationOutput;
  error: CatchErr;
  statusCode: number;
  outputToSource: object;
  statTags: object;
};

type DeliveryV0Response = {
  status: number;
  message: string;
  destinationResponse: any;
  statTags: object;
  authErrorCategory?: string;
};

type DeliveryJobState = {
  error: string;
  statusCode: number;
  metadata: ProxyMetdata;
};

type DeliveryV1Response = {
  status: number;
  message: string;
  statTags?: object;
  destinationResponse?: any;
  authErrorCategory?: string;
  response: DeliveryJobState[];
};

enum MessageType {
  IDENTIFY = 'identify',
  TRACK = 'track',
  PAGE = 'page',
  SCREEN = 'screen',
  GROUP = 'group',
  ALIAS = 'alias',
  AUDIENCE_LIST = 'audiencelist',
}

type RudderMessage = {
  userId?: string;
  anonymousId: string;
  type: MessageType;
  channel: string;
  context: object;
  originalTimestamp: Date;
  sentAt: Date;
  timestamp: Date;
  event?: string;
  integrations?: object;
  messageId: string;
  properties?: object;
  traits?: object;
};

type ErrorDetailer = {
  module: string;
  implementation: string;
  feature: string;
  errorCategory?: string;
  errorType?: string;
  meta?: string;
  destType?: string;
  srcType?: string;
  cluster?: string;
  customer?: string;
  destinationId?: string;
  workspaceId?: string;
  sourceId?: string;
};

type MetaTransferObjectForProxy = {
  metadata?: ProxyMetdata;
  metadatas?: ProxyMetdata[];
  errorDetails: ErrorDetailer;
  errorContext: string;
};

type MetaTransferObject =
  | {
      metadatas?: Metadata[];
      metadata?: Metadata;
      errorDetails: ErrorDetailer;
      errorContext: string;
    }
  | MetaTransferObjectForProxy;

type UserTransformationResponse = {
  transformedEvent: RudderMessage;
  metadata: Metadata;
  error: CatchErr;
};

type UserTransformationServiceResponse = {
  transformedEvents: ProcessorTransformationResponse[];
  retryStatus: number;
};

type UserDeletionRequest = {
  userAttributes: FixMe[];
  config: object;
  destType: string;
  jobId: string;
};

type UserDeletionResponse = {
  statusCode: number;
  error?: string;
  status?: string;
  authErrorCategory: FixMe;
  statTags: object;
};

type ComparatorInput = {
  events: ProcessorTransformationRequest[] | RouterTransformationRequestData[];
  destination: string;
  version: string;
  requestMetadata: object;
  feature: string;
};
type SourceDefinition = {
  ID: string;
  Name: string;
  Category: string;
  Type: string;
};

type Source = {
  ID: string;
  OriginalID: string;
  Name: string;
  SourceDefinition: SourceDefinition;
  Config: object;
  Enabled: boolean;
  WorkspaceID: string;
  WriteKey: string;
  Transformations?: UserTransformationInput[];
  RevisionID?: string;
  Destinations?: Destination[];
  Transient: boolean;
  EventSchemasEnabled: boolean;
  DgSourceTrackingPlanConfig: object;
};

type SourceInput = {
  event: {
    query_parameters?: any;
    [key: string]: any;
  };
  source?: Source;
};

type SourceRequestV2 = {
  method?: string;
  url?: string;
  proto?: string;
  body: string;
  headers?: Record<string, unknown>;
  query_parameters?: Record<string, unknown>;
};

type SourceInputV2 = {
  request: SourceRequestV2;
  source?: Source;
};

type SourceInputConversionResult<T> = {
  output?: T;
  conversionError?: Error;
};

export {
  ComparatorInput,
  DeliveryJobState,
  DeliveryV0Response,
  DeliveryV1Response,
  Connection,
  Destination,
  ErrorDetailer,
  MessageIdMetadataMap,
  MetaTransferObject,
  Metadata,
  ProcessorTransformationOutput,
  ProcessorTransformationRequest,
  ProcessorTransformationResponse,
  ProxyMetdata,
  ProxyRequest,
  ProxyV0Request,
  ProxyV1Request,
  RouterTransformationRequest,
  RouterTransformationRequestData,
  RouterTransformationResponse,
  RudderMessage,
  SourceTransformationEvent,
  SourceTransformationResponse,
  UserDeletionRequest,
  UserDeletionResponse,
  SourceInput,
  SourceInputV2,
  SourceRequestV2,
  Source,
  SourceInputConversionResult,
  UserTransformationLibrary,
  UserTransformationResponse,
  UserTransformationServiceResponse,
};
