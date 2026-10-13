import { describe, it } from "vitest";
import { createTestIndexer, type Exchange_AccountCreated } from "envio";
import { TestHelpers } from "envio";

describe("Exchange contract AccountCreated event tests", () => {
  it("Exchange_AccountCreated is created correctly", async (t) => {
    const indexer = createTestIndexer();

    // Creating mock for Exchange contract AccountCreated event
    const event = {
      contract: "Exchange" as const,
      event: "AccountCreated" as const,
      params: {
        account: TestHelpers.Addresses.defaultAddress,
        id: 0n,
      },
    };

    await indexer.process({
      chains: {
        143: {
          simulate: [event],
        },
      },
    });

    // Getting the actual entity from the test indexer
    let actualExchangeAccountCreated = await indexer.Exchange_AccountCreated.getOrThrow("143_0_0");

    // Creating the expected entity
    const expectedExchangeAccountCreated = {
      id: "143_0_0",
      account: event.params.account,
      event_id: event.params.id,
      chainId: 143,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    t.expect(actualExchangeAccountCreated, "Actual ExchangeAccountCreated should be the same as the expected ExchangeAccountCreated").toEqual(expectedExchangeAccountCreated);
  });
});

describe("Indexer smoke test", () => {
  it("processes the first block with events on chain 143", async (t) => {
    const indexer = createTestIndexer();

    const result = await indexer.process({ chains: { 143: {} } });

    t.expect(result.changes.length, "Should have at least one change").toBeGreaterThan(0);
    const firstChange = result.changes[0]!;
    t.expect(firstChange.chainId).toBe(143);
    t.expect(firstChange.eventsProcessed).toBeGreaterThan(0);
  }, 60_000);
});
