<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Question;

class QuestionController extends Controller
{
    public function index()
    {
        return Question::all();
    }

    public function show(Question $question)
    {
        return $question;
    }

    public function store(Request $request)
    {
        return Question::create($request->all());
        return response()->json($question,201);
    }

    public function update(Request $request,Question $question)
    {
        $question = update($request->all());
          return $response()->json($question, 200);
    }

    public function delete(Question $question)
    {
        $question->delete();
       

        return response()->json(null,204);
    }
}
