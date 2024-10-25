import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'producer',
  brokers: ['broker-0:9092', 'broker-1:9093', 'broker-2:9094'],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  setInterval(async () => {
    await producer.send({
      topic: 'test-topic',
      messages: [{ value: 'Hello KafkaJS user!' }],
    });
    console.log('Message sent');
  }, 1000);
};

run().catch(console.error);
