import { Controller, Get } from '@nestjs/common';
import { HealthStatusDto } from './dtos/response/health-status.dto';

@Controller('health')
export class HealthController {
    @Get()
    async getStatus(): Promise<HealthStatusDto> {
        return {
            status: "ok"
        };
    }
}
