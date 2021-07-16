<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
class ArticleController extends Controller
{
    public function index(){
        $articles = Article::all();
        return $articles->toJson();
    }

    public function getArticle($id) //for edit and show
    {
        $article = Article::find($id);
        return $article->toJson();
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'file' => 'required|mimes:jpg,png,csv,txt|max:2048'
        ]);

        // if($validatedData->fails()){
        //     return response()->json(['error' => $validatedData->errors()], 401);
        // }

        if($file = $request->file('file')){
            $path = $file->store('public/files');
            $name = $file->getClientOriginalName();
            
            $project = Article::create([
                'title' => $validatedData['title'],
                'content' => $validatedData['content'],
                'file' => $path
            ]);
        }
    
        // $project = Article::create([
        //     'title' => $validatedData['title'],
        //     'content' => $validatedData['content'],
        //     'file' => $path
        // ]);
        $msg = [
            'success' => true,
            'message' => 'Article created successfully'
        ];
        
        return response()->json($msg);

    }


    public function update(Request $requst, $id){
        $validatedData = $requst->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        $article = Article::find($id);
        $article->title = $validatedData['title'];
        $article->content = $validatedData['content'];
        $article->save();

        $msg = [
            'success' => true,
            'message' => 'Article updated successfully'
        ];
        
        return response()->json($msg);
    }

    
    public function delete($id){
        $article = Article::find($id);
        if(!empty($article)){
            $article->delete();
            $msg = [
                'success' => true,
                'message' => 'Article deleted successfully'
            ];
        }else{
            $msg = [
                'success' => false,
                'message' => 'Failed to delete'
            ];
        }

        return response()->json($msg);
    }
}
