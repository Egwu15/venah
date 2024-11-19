<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $projectName = $request->input('project');
        return  Inertia::render('project/Project', ['projectName' => $projectName]);
    }
}
