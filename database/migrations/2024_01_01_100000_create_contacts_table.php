<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Full name of the person contacting');
            $table->string('email')->comment('Email address for contact');
            $table->string('phone')->nullable()->comment('Phone number (optional)');
            $table->string('company')->nullable()->comment('Company name (optional)');
            $table->text('message')->comment('Contact message content');
            $table->timestamps();
            
            // Add indexes for performance
            $table->index('email');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};