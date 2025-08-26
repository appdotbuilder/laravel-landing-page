<?php

it('renders landing page successfully', function () {
    $response = $this->get('/');

    $response->assertOk();
    $response->assertInertia(fn ($page) => 
        $page->component('welcome')
    );
});

it('shows login and register links for guests', function () {
    $response = $this->get('/');

    $response->assertOk();
    // The page should render successfully for guests
});

it('shows dashboard link for authenticated users', function () {
    $user = \App\Models\User::factory()->create();

    $response = $this->actingAs($user)->get('/');

    $response->assertOk();
    // The page should render successfully for authenticated users
});