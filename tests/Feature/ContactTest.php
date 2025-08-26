<?php

use App\Models\Contact;

it('can submit contact form', function () {
    $contactData = [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '+1 (555) 123-4567',
        'company' => 'Test Company',
        'message' => 'This is a test message for the contact form.',
    ];

    $response = $this->post(route('contact.store'), $contactData);

    $response->assertRedirect();
    $response->assertSessionHas('success');

    $this->assertDatabaseHas('contacts', [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'company' => 'Test Company',
    ]);
});

it('validates required fields', function () {
    $response = $this->post(route('contact.store'), []);

    $response->assertSessionHasErrors(['name', 'email', 'message']);
});

it('validates email format', function () {
    $response = $this->post(route('contact.store'), [
        'name' => 'John Doe',
        'email' => 'invalid-email',
        'message' => 'Test message',
    ]);

    $response->assertSessionHasErrors(['email']);
});

it('can create contact with factory', function () {
    $contact = Contact::factory()->create();

    $this->assertDatabaseHas('contacts', [
        'id' => $contact->id,
        'email' => $contact->email,
    ]);
});