<?php

namespace App\Enums;

use Spatie\Enum\Enum;

final class LogEnum extends Enum
{
    const INFO = 'INFO';
    const ERROR = 'ERROR';
    const WARN = 'WARNING';
    const SUCCESS = 'SUCCESS';
    const CRITICAL = 'CRITICAL';
    const ALERT = 'ALERT';
    const NOTICE = 'NOTICE';
    const EMERGENCY = 'EMERGENCY';
    const DEBUG = 'DEBUG';
}
