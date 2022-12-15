<?php

namespace App\Http\Controllers;

use App\Models\MemoList;
use Illuminate\Http\Request;

class MemoController extends Controller
{
    public function getMemoList(Request $request)
    {
        $memo = MemoList::get()->toJson(JSON_PRETTY_PRINT);

        return response($memo, 200);
    }

    public function getMemoDetail(Request $request)
    {
        $memo = MemoList::find($request->id)
            ->toJson(JSON_PRETTY_PRINT);

        return response($memo, 200);
    }

    public function createMemo(Request $request)
    {
        MemoList::create([
            'body_text' => $request->input('bodyText'),
        ]);

        return response()->json([
            'message' => 'create memo'
        ]);
    }

    public function updateMemo(Request $request)
    {
        $id = $request->input('id');
        $bodyText = $request->input('bodyText');

        MemoList::where('id', $id)->update([
            'body_text' => $bodyText
        ]);

        return response()->json([
            'message' => 'update memo'
        ]);
    }

    public function deleteMemo(Request $request)
    {
        $id = $request->input('id');

        MemoList::where('id', $id)->delete();

        return response()->json([
            'message' => 'delete memo ' . $id
        ]);
    }
}
