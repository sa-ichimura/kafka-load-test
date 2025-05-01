import { KafkaJS } from '@confluentinc/kafka-javascript';

const kafka = new KafkaJS.Kafka({
  kafkaJS: {
    clientId: 'producer',
    brokers: ['broker-0:9092', 'broker-1:9093', 'broker-2:9094'],
  },
});

const run = async () => {
  const producer = kafka.producer();
  await producer.connect();
  setInterval(async () => {
    await producer.send({
      topic: 'test-topic',
      messages: [{ value: 'Hello KafkaJS user!' }],
    });
    console.log('Message sent');
  }, 10000);
};

run().catch(console.error);
