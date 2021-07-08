package com.example.learningandroid;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class ListViewActivity extends AppCompatActivity {

    private ListView listView;
    private final String[] options = {

            "Introduction",
            "My Bio App - Relative Layout",


    };

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_listview);

        listView = findViewById(R.id.listview);
        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, options);
        listView.setAdapter(arrayAdapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent intent;
                switch (position) {

                    case 0:
                        intent = new Intent(ListViewActivity.this, MainActivity.class);
                        startActivity(intent);

                        break;
                    case 1:
                        intent = new Intent(ListViewActivity.this, MyBioRelativeLayout.class);
                        startActivity(intent);

                        break;
                }
            }
        });


    }
}
