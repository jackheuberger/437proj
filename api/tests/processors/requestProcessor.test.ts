import { MockContext, Context, createMockContext } from '../../context'

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

describe("Processing of data passed to /request", () => {
  test.todo("Test endpoint parameters")
  test.todo("Test error handling")
  test.todo("Test prisma integration")
})