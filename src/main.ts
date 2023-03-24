import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './errors/all-exception.filter';
import { logger } from './middlewares/loggerFunction';
import { LoggerMiddleware } from './middlewares/loggingMiddleware';

const start = async () => {
  try {
    const PORT = process.env.PORT || 3002;
    const app = await NestFactory.create(AppModule);
    app.use(logger)
    const adapterHost = app.get(HttpAdapterHost)
    app.useGlobalFilters(new AllExceptionsFilter(adapterHost))
    await app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
