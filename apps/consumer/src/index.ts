import { KafkaJS } from '@confluentinc/kafka-javascript';

const kafka = new KafkaJS.Kafka({
  kafkaJS: {
    clientId: 'consumer',
    brokers: ['broker-0:9092', 'broker-1:9093', 'broker-2:9094'],
  },
});

const run = async () => {
  const consumer = kafka.consumer({
    kafkaJS: { groupId: 'test-group', fromBeginning: true },
  });

  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic' });
  await consumer.run({
    eachMessage: async ({ partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value ? message.value.toString() : null,
      });
    },
  });
};

run().catch(console.error);
