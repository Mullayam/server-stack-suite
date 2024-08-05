import { PartialType } from '@nestjs/mapped-types';
import { CreateServerTypeDto } from './create-server-type.dto';

export class UpdateServerTypeDto extends PartialType(CreateServerTypeDto) {}
