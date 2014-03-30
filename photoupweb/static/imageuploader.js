if (window.FormData && window.FileReader && window.FileList) {
	var chosenFiles = [];
	function ChosenFile(dataUrl, file, imgNode) {
		this.dataUrl = dataUrl;
		this.file = file;
		this.imgNode = imgNode;
		this.include = true;
	}

	$(function() {

		$("#choose_images").on('click', function() {
			$("#image_chooser").trigger('click');
		});

		$("#image_chooser").on('change', function(event) {
			var files = event.target.files;

			if (files.length > 0) {
				$("#upload_images").show();
			}

			for (var i = 0; i < files.length; i++) {
				var f = files[i];
				if (!f.type.match('image.*')) {
					alert("Only images are allowed!");
					continue;
				}
				var reader = new FileReader();
				reader.file = f;
				reader.onload = function(ev) {
					var tr = $("<tr></tr>");
					var td = $("<td></td>");
					var td2 = $("<td></td>");
					var tdProg = $('<td><progress min="0" max="100" value="0" id="progress"></progress></td>');
					var removeButton = $('<button class="btn btn-xs rem-button">Remove</button>');
					removeButton.on('click', function(evt) {
						var images = $("#img_previews").find('.preview-img');
						var image = $(this).parent().prev().prev().find('img');
						for ( k = 0; k < images.length; k++) {
							if ($(image).attr('src') == chosenFiles[k].dataUrl) {
								chosenFiles[k].include = false;
							}
						}
						$(this).parent().parent().hide();
					});
					var imgNode = $('<img class="preview-img" />');
					imgNode.attr("src", ev.target.result);
					imgNode.attr("width", 100);
					imgNode.attr("height", 100);
					td.append(imgNode);
					td2.append(removeButton);
					tr.append(td);
					tr.append(tdProg);
					tr.append(td2);
					$("#img_previews").append(tr);
					chosenFiles.push(new ChosenFile(ev.target.result, this.file, imgNode));
				};
				reader.readAsDataURL(f);
			}
		});

		$("#upload_images").on('click', function() {
			$('.rem-button').hide();
			for ( i = 0; i < chosenFiles.length; i++) {
				if (chosenFiles[i].include) {
					var formData = new FormData();
					formData.append('image', chosenFiles[i].file);
					var request = new XMLHttpRequest();
					request.upload.chosenFile = chosenFiles[i];
					request.upload.onprogress = function(uploadEv) {
						var pVal = (uploadEv.loaded / uploadEv.total) * 100;
						this.chosenFile.imgNode.parent().next().find('progress').val(pVal);
					};
					request.onreadystatechange = function() {
						if( this.readyState === 4 ) {
							this.upload.chosenFile.include = false;
							var linkTd = $("<td></td>");
							//this.upload.chosenFile.imgNode.parent().parent().fadeOut();
						}
					};
					request.open("POST", "/photoup/upload/", true);
					request.setRequestHeader("X-CSRFToken", $.cookie('csrftoken'));
					request.send(formData);
				}
			}
		});

	});
} else {
	alert('Your browser cannot support this file uploader.');
}
