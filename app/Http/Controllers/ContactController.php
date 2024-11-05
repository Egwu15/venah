<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;



class ContactController extends Controller
{
    public function store(Request $request): void
    {
        $validatedData =  $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'checkedItems' => ['required', 'array'],
            'aboutBusiness' => ['nullable', 'string']
        ]);

        $validatedData['checkedItems'] = implode(' , ', $validatedData['checkedItems']);

        Contact::create($validatedData);
    }
}
