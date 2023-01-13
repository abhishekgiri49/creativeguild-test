<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notification_settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('title');
            $table->string('code', 100)->unique();
            $table->string('view', 50)->default('default');
            $table->string('subject', 100);
            $table->longText('email_body')->nullable();
            $table->longText('sms_body')->nullable();
            $table->longText('database_body')->nullable();
            $table->string('notification_type')->nullable();
            $table->enum('active', ['1', '2'])->comment('1=active,2=inactive');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notification_settings');
    }
}
