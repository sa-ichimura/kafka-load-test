import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'consumer',
  brokers: ['broker-0:9092', 'broker-1:9093', 'broker-2:9094'],
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(`Received message: ${message.value?.toString()}`);
    },
  });
};

run().catch(console.error);
